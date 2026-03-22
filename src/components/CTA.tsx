"use client"
import Link from "next/link"
import { i18n } from "@/lib/i18n"
import { useLang } from "@/lib/lang-context"
export default function CTA() {
  const { lang } = useLang()
  const t = i18n[lang as keyof typeof i18n];
  return (
    <section className="py-32 text-center bg-gradient-to-b from-transparent to-black">
      <h2 className="text-4xl font-bold mb-6">
        {t.besoin}
      </h2>

      <p className="opacity-80 mb-10">
        {t.discuss}
      </p>

      <Link
        href="/contact"
        className="inline-block px-8 py-4 bg-accent text-black font-semibold rounded-xl hover:scale-105 transition"
      >
        {t.disscussYP}
      </Link>
    </section>
  )
}
