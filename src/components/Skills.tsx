"use client"
import { motion } from "framer-motion"

const skills = [
  "Java", "SQL", "spring",
  "React", "Next.js", "TypeScript",
  "Tailwind CSS", "devops",
  "Aws"
]
import { i18n } from "@/lib/i18n"
import { useLang } from "@/lib/lang-context"
export default function Skills() {
  const { lang } = useLang();
  const t = i18n[lang];
  return (
    <section className="py-32 text-center">
      <h2 className="text-4xl font-bold mb-12">{t.skills}</h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="px-5 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-accent"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  )
}
