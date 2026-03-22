"use client"
import { motion } from "framer-motion"
import { useLang } from "@/lib/lang-context"
import { i18n } from "@/lib/i18n"
import Link from "next/link"

export default function Hero() {
  const { lang } = useLang();
  const t = i18n[lang as keyof typeof i18n];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          {t.heroTitle}
        </h1>

        <p className="text-lg opacity-80 mb-10">
          {t.heroSubtitle}
        </p>

        <div className="flex justify-center gap-6">
          <Link
            href="/contact"
            className="px-8 py-4 bg-accent text-black font-semibold rounded-xl hover:scale-105 transition"
          >
            {t.ctaPrimary}
          </Link>

          <Link
            href="/projects"
            className="px-8 py-4 border border-white/20 rounded-xl hover:bg-white/10 transition"
          >
            {lang === "fr" ? "Voir mes projets" : "View projects"}
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
