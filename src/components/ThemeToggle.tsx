import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";
import { SunIcon, MoonIcon } from "./icons/UIcons";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Handle hydration mismatch - theme is undefined on first render
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="flex items-center gap-2">
        <SunIcon className="w-5 h-5 text-muted-foreground" />
        <Switch
          checked={false}
          disabled
          aria-label="Toggle theme"
        />
      </div>
    );
  }

  // Default to light theme if theme is undefined
  const isDark = theme === "dark";
  const currentTheme = theme || "light";

  return (
    <div className="flex items-center gap-2">
      {isDark ? (
        <MoonIcon className="w-5 h-5 text-muted-foreground" />
      ) : (
        <SunIcon className="w-5 h-5 text-muted-foreground" />
      )}
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => {
          setTheme(checked ? "dark" : "light");
        }}
        aria-label={`Toggle theme. Current theme: ${currentTheme}`}
      />
    </div>
  );
}
