"use client"
import ProjectCard from "@/components/ProjectCard"
import { useLang } from "@/lib/lang-context"
import { i18n } from "@/lib/i18n"
const projects = [
  {
    title: "project1title",
    description:"project1description",
    results: "project1results",
    tech: ["next.js", "Node.js", "tailwind CSS"],
    github: "#",
  },
  {
    title: "project2title",
    description:"project2description",
    results: "project2results",
    tech: ["react.js", "Node.js", "mongodb", "express.js", "tailwind CSS"],
    github: "#",
  },
]

export default function Projects() {
  const { lang } = useLang()
  const t = i18n[lang as keyof typeof i18n]
  return (
    <section className="pt-32 max-w-6xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-12">Projects</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <ProjectCard key={t[p.title as keyof typeof t]} project={p} />
        ))}
      </div>
    </section>
  )
}
