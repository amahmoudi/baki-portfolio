import "./globals.css"
import { Providers } from "./providers"
import Navbar from "../components/navbar"
import Footer from "@/components/Footer"
import { LangProvider } from "@/lib/lang-context"
export const metadata = {
  title: "AbdelBaki — Technical leader java react / Devops",
  description:
    "Freelance Fullstack Developer specializing in modern and high-performance web applications.",
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning data-scroll-behavior="smooth" >
      <body className="bg-background text-foreground">
        <Providers>
          <LangProvider>
            <Navbar />
            {children}
            <Footer />
          </LangProvider>
        </Providers>
      </body>
    </html>
  )
}
