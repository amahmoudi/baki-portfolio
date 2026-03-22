"use client"
import Link from "next/link"
import { i18n } from "@/lib/i18n"
import { useLang } from "@/lib/lang-context"
export default function Footer() {
  const { lang } = useLang()
  const t = i18n[lang];
  return (
    <footer className="border-t border-white/10 py-10 mt-32">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <p className="text-sm opacity-60">
          © {new Date().getFullYear()} AbdelBaki — Technical leader Java react / Devops
        </p>

        <div className="flex gap-6 text-sm">
          <Link href="/projects" className="hover:text-accent">{t.projects}</Link>
          <Link href="/about" className="hover:text-accent">{t.about}</Link>
          <Link href="/contact" className="hover:text-accent">{t.contact}</Link>
        </div>

      </div>
    </footer>
  )
}
