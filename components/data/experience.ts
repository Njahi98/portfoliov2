export type Experience = {
  id: string
  title: string
  company: string
  companyUrl: string
  date: string
  location: string
  locationType: "Remote" | "Onsite"
  description: string
}

export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    title: "Engineering Diploma in Computer Science",
    company: "EPI - Multidisciplinary International School",
    companyUrl: "https://episup.com/",
    date: "Sep 2021 — July 2024",
    location: "Sousse, TN",
    locationType: "Onsite",
    description: "Completed engineering diploma in computer science.",
  },
  {
    id: "2",
    title: "Web Development Intern",
    company: "IWARE",
    companyUrl: "https://www.linkedin.com/company/iware2017/",
    date: "Feb 2024 — June 2024",
    location: "Sousse, Tunisia",
    locationType: "Onsite",
    description:
      "Developed an admin dashboard with React, Spring Boot, MongoDB, and JWT. Built a WebSocket-based notification system and internship management platform with Google Meet scheduling.",
  },
  {
    id: "3",
    title: "Web Development Intern",
    company: "IWARE",
    companyUrl: "https://www.linkedin.com/company/iware2017/",
    date: "July 2023 — Aug 2023",
    location: "Sousse, Tunisia",
    locationType: "Remote",
    description:
      "Designed and built an ERP company landing page using React, Tailwind CSS, and Framer Motion with responsive design and smooth animations.",
  },
  {
    id: "4",
    title: "Preparatory Cycle for Engineering Studies",
    company: "Faculty of Sciences of Monastir",
    companyUrl: "https://fsm.rnu.tn/",
    date: "Sep 2018 — July 2021",
    location: "Monastir, Tunisia",
    locationType: "Onsite",
    description: "Completed preparatory cycle for engineering studies.",
  },
  {
    id: "5",
    title: "Baccalaureate Diploma",
    company: "Kasserine Pioneer High School",
    companyUrl: "https://www.facebook.com/Pilote.Secondaire.Kasserine/",
    date: "Sep 2017 — June 2018",
    location: "Kasserine, Tunisia",
    locationType: "Onsite",
    description: "Obtained baccalaureate diploma.",
  },
]
