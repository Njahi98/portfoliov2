import { IconProps } from "@phosphor-icons/react"
import {
  EnvelopeSimpleIcon,
  MapPinIcon,
  PhoneIcon,
} from "@phosphor-icons/react/dist/ssr"

export type ContactRecord = {
  id: string
  href?: string
  text: string
  Icon: React.ComponentType<IconProps>
}

export const CONTACT_RECORDS: ContactRecord[] = [
  {
    id: "email",
    href: "mailto:njahioussama@outlook.com",
    text: "njahioussama@outlook.com",
    Icon: EnvelopeSimpleIcon,
  },
  {
    id: "phone",
    href: "tel:+21693147693",
    text: "+216 93 147 693",
    Icon: PhoneIcon,
  },
  {
    id: "location",
    text: "",
    Icon: MapPinIcon,
  },
]
