"use client"
import { Mail, Linkedin, Github, Calendar } from "lucide-react"
import { i18n } from "@/lib/i18n"
import { useLang } from "@/lib/lang-context"

export default function Contact() {
  const { lang } = useLang()
  const t = i18n[lang as keyof typeof i18n];
  return (
    <section className="pt-32 pb-40 px-6 text-center max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        {t.together}
      </h1>

      <p className="text-lg opacity-80 mb-12">
        {t.question1}
      </p>

      <div>
      {/* CTA principal */}
      <a
        href="mailto:abdelbaki.mahmoudi@email.com"
        className="inline-block px-10 py-5 bg-accent text-black font-semibold rounded-2xl hover:scale-105 transition mb-14"
      >
        {t.sendmail}
      </a>
      <p> </p>
      {/* CTA CALENDLY */}
      <a
        href="https://calendly.com/abdelbaki-mahmoudi-jaazztech/30min"
        target="_blank"
        className="inline-flex px-10 py-5 bg-accent text-black font-semibold rounded-2xl hover:scale-105 transition mb-14"
      >
        <Calendar />
        {t.rdv}        
      </a>
      </div>
      {/* Contacts secondaires */}
      <div className="flex justify-center gap-10 text-sm opacity-80">
        <a href="mailto:abdelbaki.mahmoudi@jaazztech.com" className="hover:text-accent">
          <Mail />
        </a>
        <a href="https://www.linkedin.com/in/abdelbaki-mahmoudi-2a456726" target="_blank" className="hover:text-accent">
          <Linkedin />
        </a>
        <a href="https://github.com/amahmoudi" target="_blank" className="hover:text-accent">
          <Github />
        </a>
      </div>
    </section>
  )
}
