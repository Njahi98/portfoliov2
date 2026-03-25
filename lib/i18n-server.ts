import {
  initServerI18next,
  getT as originalGetT,
  getResources as originalGetResources,
  generateI18nStaticParams as originalGenerateI18nStaticParams,
} from "next-i18next/server"
import i18nConfig from "@/i18n.config"

let initialized = false

function ensureI18nInit() {
  if (!initialized) {
    initServerI18next(i18nConfig)
    initialized = true
  }
}

export async function getT(...args: Parameters<typeof originalGetT>) {
  ensureI18nInit()
  return originalGetT(...args)
}

export function getResources(...args: Parameters<typeof originalGetResources>) {
  ensureI18nInit()
  return originalGetResources(...args)
}

export function generateI18nStaticParams() {
  ensureI18nInit()
  return originalGenerateI18nStaticParams()
}
