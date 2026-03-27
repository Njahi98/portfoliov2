import { Geist, JetBrains_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import HeaderDesktop from "@/components/layout/header-desktop"
import HeaderMobile from "@/components/layout/header-mobile"
import Background from "@/components/layout/background"
import Footer from "@/components/layout/footer"
import {
  getT,
  getResources,
  generateI18nStaticParams,
} from "@/lib/i18n-server"
import { I18nProvider } from "next-i18next/client"

const allNamespaces = [
  "common",
  "home",
  "experience",
  "projects",
  "contact",
  "stack",
] as const

export async function generateStaticParams() {
  return generateI18nStaticParams()
}

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

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lng: string }>
}>) {
  const { lng } = await params
  const { i18n } = await getT([...allNamespaces])
  const resources = getResources(i18n, [...allNamespaces])
  return (
    <html
      lang={lng}
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
          <Background />
          <I18nProvider language={lng} resources={resources}>
            <HeaderDesktop />
            <HeaderMobile />
            {children}
            <Footer />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
