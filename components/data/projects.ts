export type Project = {
  slug: string
  image: string
  images: Array<string>
  githubUrl?: string
  liveDemoUrl?: string
}

export const projects: Array<Project> = [
  {
    slug: "textile-pro",
    image: "/projects/project1/proj1S1.webp",
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
    githubUrl: "https://github.com/Njahi98/textile-frontend",
    liveDemoUrl: "https://textilepro.netlify.app/",
  },
  {
    slug: "erp-project",
    image: "/projects/project2/proj2S1.webp",
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
    image: "/projects/project3/proj3S1.webp",
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
    githubUrl: "https://github.com/Njahi98/Recipe-Management-Application",
    liveDemoUrl: "https://recipe-management-application-1.onrender.com/",
  },
  {
    slug: "portfolio-v2",
    image: "/projects/project4/proj4S1.png",
    images: [
      "/projects/project4/proj4S1.png",
      "/projects/project4/proj4S2.png",
      "/projects/project4/proj4S3.png",
      "/projects/project4/proj4S4.png",
      "/projects/project4/proj4S5.png",
    ],
    githubUrl: "https://github.com/Njahi98/portfoliov2",
    liveDemoUrl: "https://njahi-oussama.vercel.app/",
  },
   {
    slug: "portfolio-v1",
    image: "/projects/project5/proj5S1.webp",
    images: [
      "/projects/project5/proj5S1.webp",
      "/projects/project5/proj5S2.webp",
      "/projects/project5/proj5S3.webp",
      "/projects/project5/proj5S4.webp",
    ],
    githubUrl: "https://github.com/Njahi98/MyPortfolioV1",
    liveDemoUrl: "https://njahi-oussama.netlify.app/",
  },
]
