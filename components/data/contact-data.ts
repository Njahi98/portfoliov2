import { IconProps } from "@phosphor-icons/react"
import {
  EnvelopeSimpleIcon,
  MapPinIcon,
  PhoneIcon,
} from "@phosphor-icons/react/dist/ssr"

export type Contact = {
  id:string
  method: string
  href?: string
  text: string
  Icon: React.ComponentType<IconProps>
}
export const CONTACT_DATA: Contact[] = [
  {
    id:"email",
    method: "Email",
    href: "mailto:njahioussama@outlook.com",
    text: "njahioussama@outlook.com",
    Icon: EnvelopeSimpleIcon,
  },
  {
    id:"phone",
    method: "Phone",
    href: "tel:+21693147693",
    text: "+216 93 147 693",
    Icon: PhoneIcon,
  },
  {
    id:"location",
    method: "Location",
    text: "Tunisia",
    Icon: MapPinIcon,
  },
]
