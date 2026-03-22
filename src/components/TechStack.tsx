"use client"
const stack = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind"],
  backend: ["Java", "Node.js", "Express", "C#"],
  database: ["PostgreSQL", "MongoDB", "Oracle"],
  tools: ["Git", "Docker", "Vercel", "Aws"],
}
import { i18n } from "@/lib/i18n"
import { useLang } from "@/lib/lang-context"
export default function TechStack() {
  const { lang } = useLang();
  const t = i18n[lang as keyof typeof i18n];
  return (
    <section className="py-32 text-center">
      <h2 className="text-4xl font-bold mb-12">{t.stack}</h2>

      <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {Object.entries(stack).map(([key, items]) => (
          <div key={key}>
            <h3 className="text-accent mb-4 capitalize">{key}</h3>
            {items.map((i) => (
              <p key={i} className="opacity-80">{i}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
