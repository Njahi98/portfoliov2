export type projectBase = {
  slug?: string
  title: string
  description: string
  image: string
  link: string
}
export type projectWithImages = projectBase & {
  images: Array<string>
}

export const projects: Array<projectWithImages> = [
  {
    slug: "textile-pro",
    title: "Textile Facility Admin Dashboard",
    description: "description",
    image: "/projects/project1/proj1S1.webp",
    link: "/projects/textile-pro",
    images: [
      "/projects/project1/proj1S1.webp",
      "/projects/project1/proj1S2.webp",
      "/projects/project1/proj1S3.webp",
      "/projects/project1/proj1S4.webp",
      "/projects/project1/proj1S5.webp",
      "/projects/project1/proj1S6.webp",
      "/projects/project1/proj1S7.webp",
      "/projects/project1/proj1S8.webp",
      "/projects/project1/proj1S9.webp",
      "/projects/project1/proj1S10.webp",
      "/projects/project1/proj1S11.webp",
      "/projects/project1/proj1S12.webp",
    ],
  },
  {
    slug: "erp-project",
    title: "Enhancing an ERP Project",
    description: "description",
    image: "/projects/project2/proj2S1.webp",
    link: "/projects/erp-project",
    images: [
      "/projects/project2/proj2S1.webp",
      "/projects/project2/proj2S2.webp",
      "/projects/project2/proj2S3.webp",
      "/projects/project2/proj2S4.webp",
      "/projects/project2/proj2S5.webp",
      "/projects/project2/proj2S6.webp",
    ],
  },
  {
    slug: "recipe-app",
    title: "Recipe sharing application",
    description: "description",
    image: "/projects/project3/proj3S1.webp",
    link: "/projects/recipe-app",
    images: [
      "/projects/project3/proj3S1.webp",
      "/projects/project3/proj3S2.webp",
      "/projects/project3/proj3S3.webp",
      "/projects/project3/proj3S4.webp",
      "/projects/project3/proj3S5.webp",
      "/projects/project3/proj3S6.webp",
      "/projects/project3/proj3S7.webp",
      "/projects/project3/proj3S8.webp",
      "/projects/project3/proj3S9.webp",
      "/projects/project3/proj3S10.webp",
      "/projects/project3/proj3S11.webp",
      "/projects/project3/proj3S12.webp",
      "/projects/project3/proj3S13.webp",
      "/projects/project3/proj3S14.webp",
    ],
  },
  {
    slug: "portfolio-v1",
    title: "Portfolio v1",
    description: "portfolio",
    image: "/projects/project4/proj4S1.webp",
    link: "/projects/portfolio-v1",
    images: [
      "/projects/project4/proj4S1.webp",
      "/projects/project4/proj4S2.webp",
      "/projects/project4/proj4S3.webp",
      "/projects/project4/proj4S4.webp",
    ],
  },
]
