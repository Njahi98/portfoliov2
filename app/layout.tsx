import { Geist, JetBrains_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import HeaderDesktop from "@/components/layout/header-desktop"
import HeaderMobile from "@/components/layout/header-mobile"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Njahi Oussama - Full Stack Web Developer",
  description: "Welcome to Njahi Oussama's portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontSans.variable,
        "font-mono",
        jetbrainsMono.variable
      )}
    >
      <body>
        <ThemeProvider>
          <div className="relative min-h-screen w-full bg-[#020617]">
            {/* Magenta Orb Grid Background */}
            <div
              className="absolute inset-0 z-0"
              style={{
      background: "#020617",
      backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
        radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
      `,
      backgroundSize: "32px 32px, 32px 32px, 100% 100%",
              }}
            />
            

            <main className="relative z-10 pt-16 md:pt-28">
              <HeaderDesktop />
              <HeaderMobile />
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
