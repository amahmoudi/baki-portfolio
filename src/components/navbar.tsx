"use client"
import Link from "next/link"
import { usePathname } from "next/navigation" // Pour marquer le lien actif
import { Moon, Sun, Languages } from "lucide-react"
import { useTheme } from "next-themes"
import { useLang } from "@/lib/lang-context"
import { i18n } from "@/lib/i18n"
import { useState, useEffect } from "react"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const { lang, setLang } = useLang()
  const pathname = usePathname()
  const t = i18n[lang]
  const [isClient, setIsClient] = useState(false)

  const navLinks = [
    { name: t.projects, href: "/projects" },
    { name: t.about, href: "/about" },
    { name: t.contact, href: "/contact" },
  ]

   useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo / Home */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-xl font-bold tracking-tighter hover:text-accent transition-colors duration-300"
            >
              {t.home.toUpperCase()}
            </Link>
          </div>

          {/* Navigation Centrale (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-300 hover:text-accent ${
                    isActive ? "text-accent" : "text-white/70"
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>

          {/* Actions Droite */}
          <div className="flex items-center space-x-2">
            {/* Sélecteur de Langue */}
            <button
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white/70 hover:bg-white/5 hover:text-white transition-all"
              aria-label="Change language"
            >
              <Languages size={14} />
              {lang}
            </button>

            {/* Séparateur */}
            <div className="h-4 w-[1px] bg-white/10 mx-1" />

            {/* Toggle Thème */}
            {isClient  && <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 text-white/80 hover:text-white"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun size={18} className="rotate-0 scale-100 transition-all" />
              ) : (
                <Moon size={18} className="rotate-0 scale-100 transition-all" />
              )}
            </button>}
          </div>

        </div>
      </div>
    </nav>
  )
}