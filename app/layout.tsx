import { Geist, JetBrains_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import HeaderDesktop from "@/components/layout/header-desktop"
import HeaderMobile from "@/components/layout/header-mobile"
import Background from "@/components/layout/background"

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
        <Background/>
        <HeaderDesktop />
        <HeaderMobile />
        {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
