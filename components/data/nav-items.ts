export type NavItem = {
  segment: string
  labelKey: string
}

export const NAV_ITEMS: NavItem[] = [
  { segment: "", labelKey: "nav.home" },
  { segment: "projects", labelKey: "nav.projects" },
  { segment: "stack", labelKey: "nav.stack" },
  { segment: "experience", labelKey: "nav.experience" },
  { segment: "contact", labelKey: "nav.contact" },
]
