"use client"
import { i18n } from "@/lib/i18n"
import { useLang } from "@/lib/lang-context"
export default function About() {
  const { lang } = useLang()
  const t = i18n[lang];
  return (
    <section className="min-h-screen px-6 pt-32 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8">{t.aboutme}</h2>

      <p className="text-lg leading-relaxed opacity-80">
        {t.aboutmetxt}   
      </p>
    </section>
  )
}
