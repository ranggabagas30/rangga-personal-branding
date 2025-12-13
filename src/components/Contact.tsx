import React from "react";
import { MailIcon, MapPinIcon, ClockIcon, SendIcon, MessageSquareIcon, SimpleIcon } from "./icons/UIcons";

export function Contact() {
  return (
    <section id="contact" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-slate-800/50 border border-cyan-500/30 rounded-full mb-4">
            <span className="text-cyan-400">Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-white mb-6">
            Let's Build Something
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Amazing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                  <MailIcon className="w-5 h-5 text-cyan-400" />
                </div>
                <h4 className="text-white">Email</h4>
              </div>
              <p className="text-gray-400">rangga.bagas0@gmail.com</p>
            </div>

            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                  <MapPinIcon className="w-5 h-5 text-cyan-400" />
                </div>
                <h4 className="text-white">Location</h4>
              </div>
              <p className="text-gray-400">Jakarta, Indonesia</p>
              <p className="text-gray-500 text-sm mt-1">GMT+7 (Available worldwide)</p>
            </div>

            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                  <ClockIcon className="w-5 h-5 text-cyan-400" />
                </div>
                <h4 className="text-white">Availability</h4>
              </div>
              <p className="text-gray-400">30+ hours/week</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">Currently available</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
              <h4 className="text-white mb-4">Connect With Me</h4>
              <div className="grid grid-cols-2 gap-3">
                <a href="#" className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors group">
                  <SimpleIcon icon="github" className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
                  <span className="text-gray-400 text-sm group-hover:text-cyan-400">GitHub</span>
                </a>
                <a href="#" className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors group">
                  <SimpleIcon icon="linkedin" className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
                  <span className="text-gray-400 text-sm group-hover:text-cyan-400">LinkedIn</span>
                </a>
                <a href="#" className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors group">
                  <SimpleIcon icon="x" className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
                  <span className="text-gray-400 text-sm group-hover:text-cyan-400">Twitter</span>
                </a>
                <a href="#" className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors group">
                  <SimpleIcon icon="internetarchive" color="9CA3AF" className="w-5 h-5 group-hover:opacity-80 transition-opacity" />
                  <span className="text-gray-400 text-sm group-hover:text-cyan-400">Website</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquareIcon className="w-6 h-6 text-cyan-400" />
                <h3 className="text-white text-2xl">Send me a message</h3>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Your Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Your Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Budget Range</label>
                  <select className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors">
                    <option>$1,000 - $5,000</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000 - $25,000</option>
                    <option>$25,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Project Details</label>
                  <textarea
                    rows={6}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all group"
                >
                  <span>Send Message</span>
                  <SendIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-center">
          <p className="text-gray-400">
            © 2025 Rangga B. - Senior Mobile Engineer. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with passion using React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
