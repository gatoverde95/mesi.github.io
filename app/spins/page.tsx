"use client"
import { Download, Github, Mail, MessageCircle, ExternalLink, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SpinsPage() {
  const spins = [
    {
      name: "CuerdOS Budgie",
      logo: "/cuerdos.github.io-main/images/spins/budgie-logo.webp",
      image: "/cuerdos.github.io-main/images/spins/cuerdos-budgie-re.webp",
      description: "Edition with Budgie desktop environment, with an original and more familiar customization.",
      downloadUrl:
        "https://sourceforge.net/projects/cuerdos/files/community_spins/cuerdos-budgie/CuerdOS-1.2.1-Budgie_RE_amd64.iso/download",
      archiveUrl: "https://archive.org/download/cuerdos-1.2.1-budgie-re-amd64/CuerdOS-1.2.1-Budgie_RE_amd64.iso",
      torrentUrl:
        "https://archive.org/download/cuerdos-1.2.1-budgie-re-amd64/cuerdos-1.2.1-budgie-re-amd64_archive.torrent",
      checksumUrl: "/cuerdos.github.io-main/checksums/budgie-re-hash.txt",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "CuerdOS CinnamiX",
      logo: "/cuerdos.github.io-main/images/spins/cinnamon-logo.webp",
      image: "/cuerdos.github.io-main/images/spins/cuerdos-cinnamix.webp",
      description:
        "With the Cinnamon desktop environment, an edition that aims to be easy to use and user-friendly for all types of users.",
      downloadUrl:
        "https://sourceforge.net/projects/cuerdos/files/community_spins/cuerdos-cinnamix/CuerdOS-1.2.1-CinnamiX_amd64.iso/download",
      archiveUrl: "https://archive.org/download/cuerdos-1.2.1-cinnamix-amd64/CuerdOS-1.2.1-CinnamiX_amd64.iso",
      torrentUrl:
        "https://archive.org/download/cuerdos-1.2.1-cinnamix-amd64/cuerdos-1.2.1-cinnamix-amd64_archive.torrent",
      checksumUrl: "/cuerdos.github.io-main/checksums/cinnamix-hash.txt",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "CuerdOS LXQt",
      logo: "/cuerdos.github.io-main/images/spins/lxqt-logo.webp",
      image: "/cuerdos.github.io-main/images/spins/cuerdos-lxqt.webp",
      description: "Edition with LXQt desktop environment, with an original and more familiar customization.",
      downloadUrl:
        "https://sourceforge.net/projects/cuerdos/files/community_spins/cuerdos-lxqt/CuerdOS-1.2.1-LXQt_amd64.iso/download",
      archiveUrl: "https://archive.org/download/cuerdos-1.2.1-lxqt-amd64/CuerdOS-1.2.1-LXQt_amd64.iso",
      torrentUrl: "https://archive.org/download/cuerdos-1.2.1-lxqt-amd64/cuerdos-1.2.1-lxqt-amd64_archive.torrent",
      checksumUrl: "/cuerdos.github.io-main/checksums/lxqt-hash.txt",
      color: "from-green-500 to-green-600",
    },
    {
      name: "CuerdOS Mate",
      logo: "/cuerdos.github.io-main/images/spins/mate-logo.webp",
      image: "/cuerdos.github.io-main/images/spins/cuerdos-mate.webp",
      description:
        "Edition with the Mate desktop environment, with a customization inspired by the ElementaryOS Pantheon desktop.",
      downloadUrl:
        "https://sourceforge.net/projects/cuerdos/files/community_spins/cuerdos-mate/CuerdOS-1.2.1-MATE_amd64.iso/download",
      archiveUrl: "https://archive.org/download/cuerdos-1.2.1-mate-amd64/CuerdOS-1.2.1-MATE_amd64.iso",
      torrentUrl: "https://archive.org/download/cuerdos-1.2.1-mate-amd64/cuerdos-1.2.1-mate-amd64_archive.torrent",
      checksumUrl: "/cuerdos.github.io-main/checksums/mate-hash.txt",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "CuerdOS Shell",
      logo: "/cuerdos.github.io-main/images/spins/shell-logo.webp",
      image: "/cuerdos.github.io-main/images/spins/cuerdos-shell.webp",
      description:
        "The green plane distribution together with a modified Gnome Shell, to bring it back to its classic and familiar distribution.",
      downloadUrl:
        "https://sourceforge.net/projects/cuerdos/files/community_spins/cuerdos-shell/CuerdOS_1.2.1-Shell.iso/download",
      archiveUrl: "https://archive.org/download/cuerd-os-1.2-1-shell-amd-64/CuerdOS_1.2.1-Shell.iso",
      torrentUrl:
        "https://archive.org/download/cuerd-os-1.2-1-shell-amd-64/cuerd-os-1.2-1-shell-amd-64_archive.torrent",
      checksumUrl: "/cuerdos.github.io-main/checksums/shell-hash.txt",
      color: "from-red-500 to-red-600",
    },
    {
      name: "CuerdOS X3",
      logo: "/cuerdos.github.io-main/images/spins/x3-logo.webp",
      image: "/cuerdos.github.io-main/images/spins/x3.webp",
      description:
        "An experimental image of CuerdOS that mounts the Xfce desktop and the I3 window manager, providing an experience with the comfort of a desktop environment and the fluidity of a tiling window manager.",
      downloadUrl:
        "https://sourceforge.net/projects/cuerdos/files/community_spins/cuerdos-x3/CuerdOS-1.2-X3_amd64.iso/download",
      archiveUrl: "https://archive.org/download/cuerd-os-1.2-x-3-amd-64/CuerdOS-1.2-X3_amd64.iso",
      torrentUrl: "https://archive.org/download/cuerd-os-1.2-x-3-amd-64/cuerd-os-1.2-x-3-amd-64_archive.torrent",
      checksumUrl: "/cuerdos.github.io-main/checksums/x3-hash.md5",
      color: "from-indigo-500 to-indigo-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-4">
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
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/#about"
                className="text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                About
              </Link>
              <Link
                href="/#download"
                className="text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                Download
              </Link>
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

      {/* Header */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-green-600 hover:text-green-700 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                CuerdOS Visuals
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4">
              Community-driven desktop experiences
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto">
              CuerdOS Visuals are variations of the distro with alternative desktop environments to the original project
              and a selection of applications of their own, thus offering different ways to experience CuerdOS.
            </p>
          </div>

          {/* Spins logos */}
          <div className="text-center mb-16">
            <Image
              src="/cuerdos.github.io-main/images/spins/spins-logos.webp"
              alt="CuerdOS Spins Logos"
              width={800}
              height={200}
              className="mx-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Spins Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {spins.map((spin, index) => (
              <div
                key={spin.name}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${spin.color} rounded-lg flex items-center justify-center p-2`}
                    >
                      <Image
                        src={spin.logo || "/placeholder.svg"}
                        alt={`${spin.name} Logo`}
                        width={32}
                        height={32}
                        className="filter brightness-0 invert"
                      />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{spin.name}</h2>
                  </div>

                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">{spin.description}</p>

                  <div className="space-y-4">
                    <a
                      href={spin.downloadUrl}
                      className={`block w-full bg-gradient-to-r ${spin.color} hover:shadow-lg text-white text-center py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105`}
                    >
                      <Download className="w-4 h-4 inline mr-2" />
                      Download from Sourceforge
                    </a>
                    <div className="flex space-x-2">
                      <a
                        href={spin.archiveUrl}
                        className="flex-1 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-green-500 hover:text-green-600 text-center py-2 rounded-lg transition-all duration-200"
                      >
                        Archive
                      </a>
                      <a
                        href={spin.torrentUrl}
                        className="flex-1 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-green-500 hover:text-green-600 text-center py-2 rounded-lg transition-all duration-200"
                      >
                        Torrent
                      </a>
                    </div>
                    <a
                      href={spin.checksumUrl}
                      className="text-sm text-green-600 hover:text-green-700 flex items-center justify-center"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Checksums
                    </a>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="relative">
                    <div
                      className={`bg-gradient-to-r ${spin.color.replace("to-", "to-").replace("from-", "from-")}/10 rounded-2xl p-8`}
                    >
                      <Image
                        src={spin.image || "/placeholder.svg"}
                        alt={spin.name}
                        width={600}
                        height={400}
                        className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Credits */}
          <div className="mt-20 text-center">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Community Contributors</h3>
              <p className="text-slate-600 dark:text-slate-300">
                These editions were created and are mainly maintained by{" "}
                <a href="https://github.com/gatoverde95" className="text-green-600 hover:text-green-700 font-semibold">
                  Gatoverde95
                </a>{" "}
                and other community members.
              </p>
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
          </div>
        </div>
      </footer>
    </div>
  )
}
