import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "./icons/UIcons";
import { cn } from "./ui/utils";

interface ThemeToggleProps {
  className?: string;
  whiteMode?: boolean;
}

export function ThemeToggle({ className, whiteMode = false }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Handle hydration mismatch - theme is undefined on first render
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <button
        type="button"
        disabled
        className="relative inline-flex h-8 w-14 items-center rounded-full bg-[var(--color-switch-background)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Toggle theme"
      >
        <div className="absolute left-1 z-10 flex h-6 w-6 items-center justify-center">
          <SunIcon className={cn("h-4 w-4", whiteMode ? "text-white" : "text-muted-foreground")} />
        </div>
        <div className="absolute right-1 z-10 flex h-6 w-6 items-center justify-center">
          <MoonIcon className={cn("h-4 w-4 opacity-50", whiteMode ? "text-white" : "text-muted-foreground")} />
        </div>
        <div className={cn("absolute left-0.5 h-6 w-6 rounded-full shadow-sm", whiteMode ? "bg-white/20" : "bg-card")} />
      </button>
    );
  }

  // Default to light theme if theme is undefined
  const isDark = theme === "dark";
  const currentTheme = theme || "light";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer",
        isDark
          ? "bg-primary"
          : "bg-[var(--color-switch-background)]"
      )}
      aria-label={`Toggle theme. Current theme: ${currentTheme}`}
    >
      {/* Sun Icon - always visible on left */}
      <div className="absolute left-1 z-10 flex h-6 w-6 items-center justify-center">
        <SunIcon
          className={cn(
            "h-4 w-4 transition-colors duration-200",
            whiteMode
              ? isDark
                ? "text-white opacity-50"
                : "text-white"
              : isDark
              ? "text-primary-foreground opacity-50"
              : "text-foreground"
          )}
        />
      </div>

      {/* Moon Icon - always visible on right */}
      <div className="absolute right-1 z-10 flex h-6 w-6 items-center justify-center">
        <MoonIcon
          className={cn(
            "h-4 w-4 transition-colors duration-200",
            whiteMode
              ? isDark
                ? "text-white"
                : "text-white opacity-50"
              : isDark
              ? "text-primary-foreground"
              : "text-muted-foreground opacity-50"
          )}
        />
      </div>

      {/* Sliding thumb that moves between icons */}
      <div
        className={cn(
          "absolute h-6 w-6 rounded-full shadow-sm transition-transform duration-200 ease-in-out",
          whiteMode ? "bg-white/20" : "bg-card",
          isDark ? "translate-x-[calc(3.5rem-1.5rem-0.25rem)]" : "translate-x-0.5"
        )}
        aria-hidden="true"
      />
    </button>
  );
}
