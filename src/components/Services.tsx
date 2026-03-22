"use client"
import { Code, Layout, Server } from "lucide-react"
import { useLang } from "@/lib/lang-context"
import { i18n } from "@/lib/i18n"

export default function Services() {
 const { lang } = useLang();
  const t = i18n[lang as keyof typeof i18n];

  const services = [
    {
      title: lang === "fr" ? "Application Web sur mesure" : "Custom Web Applications",
      desc:
        lang === "fr"
          ? "Développement d'applications performantes adaptées à vos besoins métier."
          : "Building high-performance applications tailored to your business needs.",
      icon: <Code />,
    },
    {
      title: lang === "fr" ? "Front-end moderne" : "Modern Front-end",
      desc:
        lang === "fr"
          ? "Interfaces rapides, accessibles et optimisées pour la conversion."
          : "Fast, accessible and conversion-oriented user interfaces.",
      icon: <Layout />,
    },
    {
      title: lang === "fr" ? "Back-end & API" : "Back-end & APIs",
      desc:
        lang === "fr"
          ? "APIs sécurisées, bases de données et logique métier robuste."
          : "Secure APIs, databases and robust business logic.",
      icon: <Server />,
    },
  ]

  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">
        {t.servicesTitle}
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-accent transition"
          >
            <div className="text-accent mb-4">{s.icon}</div>
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="opacity-80 mt-3">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
