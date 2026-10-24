export type ExperienceRecord = {
  id: string
  companyUrl: string
  locationType: "remote" | "onsite"
}

export const EXPERIENCES: ExperienceRecord[] = [
  {
    id: "1",
    companyUrl: "https://www.ena.tn/",
    locationType: "onsite",
  },
  {
    id: "2",
    companyUrl: "https://www.freelance-atelier.example/",
    locationType: "remote",
  },
  {
    id: "3",
    companyUrl: "https://episup.com/",
    locationType: "onsite",
  },
  {
    id: "4",
    companyUrl: "https://www.linkedin.com/company/iware2017/",
    locationType: "onsite",
  },
  {
    id: "5",
    companyUrl: "https://www.linkedin.com/company/iware2017/",
    locationType: "remote",
  },
  {
    id: "6",
    companyUrl: "https://fsm.rnu.tn/",
    locationType: "onsite",
  },
  {
    id: "7",
    companyUrl: "https://www.facebook.com/Pilote.Secondaire.Kasserine/",
    locationType: "onsite",
  },
]
