"use client"

import { useState } from "react"
import {
  ChevronDown,
  Download,
  Github,
  Mail,
  MessageCircle,
  ExternalLink,
  Check,
  Zap,
  Shield,
  Cpu,
  HardDrive,
} from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Image
                src="/cuerdos.github.io-main/images/cuerdos_logo.webp"
                alt="CuerdOS Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                CuerdOS
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                About
              </a>
              <div className="relative group">
                <button className="flex items-center space-x-1 text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  <span>Download</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a
                    href="#download"
                    className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-t-lg"
                  >
                    Official Images
                  </a>
                  <a
                    href="#spins"
                    className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-b-lg"
                  >
                    Community Spins
                  </a>
                </div>
              </div>
              <a
                href="https://cuerdoswiki.blogspot.com/"
                className="text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                Wiki
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/CuerdOS"
                className="text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                CuerdOS
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4">Optimized to the last pixel</p>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto mb-8">
              A GNU/Linux distribution focused on stability, efficiency and performance on computers of any range,
              without losing any functionality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <Download className="w-5 h-5 inline mr-2" />
                Download Now
              </button>
              <button className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-green-500 hover:text-green-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
              <Image
                src="/cuerdos.github.io-main/images/cuerdos_main.webp"
                alt="CuerdOS Desktop"
                width={1200}
                height={675}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Why Choose CuerdOS?</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Built with performance and user experience in mind, CuerdOS delivers a modern Linux experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Image
                  src="/cuerdos.github.io-main/images/debian.webp"
                  alt="Debian"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Debian Based</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Built on the rock-solid foundation of Debian, providing exceptional stability and security.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Optimized Performance</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Custom kernel optimizations and system tweaks for maximum performance on any hardware.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Image
                  src="/cuerdos.github.io-main/images/sway.webp"
                  alt="Sway"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert"
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Modern Desktop</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Features Sway window manager with beautiful, efficient workflows and Wayland support.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                <HardDrive className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Own Repositories</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Access to exclusive packages and software not available in standard Debian repositories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Technical Excellence</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                CuerdOS isn't just another Linux distribution. It's a carefully crafted system with performance
                optimizations and modern features.
              </p>

              <div className="space-y-4">
                {[
                  "Bauh Store preconfigured for easy software installation",
                  "ZRam optimization for better memory management",
                  "Nala and Apt-fast for faster package management",
                  "Custom kernel with BORE scheduler and Ananicy daemon",
                  "TLP power management for optimal battery life",
                  "Pipewire audio server with low latency",
                  "Waydroid support for Android apps",
                  "Optimized boot speed and system responsiveness",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-8">
                <Image
                  src="/cuerdos.github.io-main/images/cuerdos-standard.webp"
                  alt="CuerdOS Standard"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Download CuerdOS Cessna 1.2.1</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Choose your preferred edition and start your journey with CuerdOS today.
            </p>
          </div>

          {/* System Requirements */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 mb-12 shadow-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 text-center">
              System Requirements
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">Minimum</h4>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-center space-x-2">
                    <Cpu className="w-4 h-4" />
                    <span>x86_64 1.00 GHz CPU</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>1GB of RAM</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <HardDrive className="w-4 h-4" />
                    <span>8.5GB disk storage</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">Recommended</h4>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-center space-x-2">
                    <Cpu className="w-4 h-4" />
                    <span>x86_64 1.00 GHz CPU</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>2GB of RAM</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <HardDrive className="w-4 h-4" />
                    <span>8.5GB SSD storage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Download Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
              <div className="aspect-video relative">
                <Image
                  src="/cuerdos.github.io-main/images/cuerdos-standard.webp"
                  alt="CuerdOS Standard"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">CuerdOS Standard</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  The flagship edition featuring the Sway window manager and modern Wayland experience.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://sourceforge.net/projects/cuerdos/files/stable/standard/CuerdOS-1.2.1-Standard_amd64.iso/download"
                    className="block w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-center py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                  >
                    <Download className="w-4 h-4 inline mr-2" />
                    Download from Sourceforge
                  </a>
                  <div className="flex space-x-2">
                    <a
                      href="https://archive.org/download/cuerd-os-1.2.1-standard-amd-64/CuerdOS-1.2.1-Standard_amd64.iso"
                      className="flex-1 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-green-500 hover:text-green-600 text-center py-2 rounded-lg transition-all duration-200"
                    >
                      Archive
                    </a>
                    <a
                      href="https://archive.org/download/cuerd-os-1.2.1-standard-amd-64/cuerd-os-1.2.1-standard-amd-64_archive.torrent"
                      className="flex-1 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-green-500 hover:text-green-600 text-center py-2 rounded-lg transition-all duration-200"
                    >
                      Torrent
                    </a>
                  </div>
                  <a
                    href="/cuerdos.github.io-main/checksums/standard-hash.txt"
                    className="text-sm text-green-600 hover:text-green-700 flex items-center justify-center"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Checksums
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
              <div className="aspect-video relative">
                <Image
                  src="/cuerdos.github.io-main/images/cuerdos-legacy.webp"
                  alt="CuerdOS Legacy"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">CuerdOS Legacy</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  Traditional desktop experience with Xfce, perfect for users who prefer familiar interfaces.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://sourceforge.net/projects/cuerdos/files/stable/legacy/CuerdOS-1.2.1-Legacy_amd64.iso/download"
                    className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-center py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                  >
                    <Download className="w-4 h-4 inline mr-2" />
                    Download from Sourceforge
                  </a>
                  <div className="flex space-x-2">
                    <a
                      href="https://archive.org/download/cuerd-os-1.2.1-legacy-amd-64/CuerdOS-1.2.1-Legacy_amd64.iso"
                      className="flex-1 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-500 hover:text-blue-600 text-center py-2 rounded-lg transition-all duration-200"
                    >
                      Archive
                    </a>
                    <a
                      href="https://archive.org/download/cuerd-os-1.2.1-legacy-amd-64/cuerd-os-1.2.1-legacy-amd-64_archive.torrent"
                      className="flex-1 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-500 hover:text-blue-600 text-center py-2 rounded-lg transition-all duration-200"
                    >
                      Torrent
                    </a>
                  </div>
                  <a
                    href="/cuerdos.github.io-main/checksums/legacy-hash.txt"
                    className="text-sm text-blue-600 hover:text-blue-700 flex items-center justify-center"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Checksums
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Community Spins */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Community Spins Available</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              Explore alternative desktop environments created by our community
            </p>
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-8">
              <Image
                src="/cuerdos.github.io-main/images/spins.webp"
                alt="CuerdOS Spins"
                width={800}
                height={400}
                className="rounded-lg mx-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => (window.location.href = "/spins")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/cuerdos.github.io-main/images/cuerdos_logo.webp"
                  alt="CuerdOS Logo"
                  width={32}
                  height={32}
                  className="rounded"
                />
                <span className="text-xl font-bold">CuerdOS</span>
              </div>
              <p className="text-slate-400">
                Optimized to the last pixel. A modern GNU/Linux distribution focused on performance and user experience.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="https://cuerdoswiki.blogspot.com/" className="hover:text-white transition-colors">
                    Wiki
                  </a>
                </li>
                <li>
                  <a href="/changelog.html" className="hover:text-white transition-colors">
                    Changelog
                  </a>
                </li>
                <li>
                  <a href="https://github.com/CuerdOS" className="hover:text-white transition-colors">
                    Source Code
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Community</h4>
              <div className="flex space-x-4">
                <a href="mailto:cuerdoslinux@proton.me" className="text-slate-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="https://t.me/+GibSWjFc89Q2ODU8" className="text-slate-400 hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="https://github.com/CuerdOS" className="text-slate-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>© 2024 CuerdOS Dev Team. Licensed under GNU GPL v3.</p>
            <p className="mt-2 text-sm">
              The{" "}
              <a href="https://github.com/CuerdOS/logo" className="text-green-400 hover:text-green-300">
                CuerdOS logo
              </a>{" "}
              is published under
              <a href="https://creativecommons.org/licenses/by-sa/4.0/" className="text-green-400 hover:text-green-300">
                {" "}
                CC-BY-SA-4.0
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
