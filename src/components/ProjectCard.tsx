"use client"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { useLang } from "@/lib/lang-context"
import { i18n } from "@/lib/i18n"

type Project = {
  title: string
  description: string
  tech: string[]
  github: string
  demo?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  const { lang } = useLang()
  const t = i18n[lang as keyof typeof i18n]

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur hover:border-accent transition"
    >
      <h3 className="text-xl font-semibold text-accent">
        {t[project.title]}
      </h3>

      <p className="mt-3 text-sm opacity-80">
        {t[project.description]}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded bg-black/30 border border-white/10"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-6">
        <a href={project.github} target="_blank">
          <Github size={20} />
        </a>
        {project.demo && (
          <a href={project.demo} target="_blank">
            <ExternalLink size={20} />
          </a>
        )}
      </div>
    </motion.div>
  )
}
