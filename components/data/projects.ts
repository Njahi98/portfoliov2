export type projectCardType = {
  slug?:string
  title: string
  description: string
  image: string
  link: string
  images?:Array<string>
}

export const projects: Array<projectCardType> = [
  {
    slug:"textile-pro",
    title: "Textile Facility Admin Dashboard",
    description: "description",
    image: "/projects/project1/proj1S1.webp",
    link: "/projects/textile-pro",
    images:["/projects/project1/proj1S1.webp","/projects/project1/proj1S2.webp"]
  },
  {
    slug:"erp-project",
    title: "Enhancing an ERP Project",
    description: "description",
    image: "/projects/project2/proj2S1.webp",
    link: "/projects/erp-project",
    images:["/projects/project2/proj2S1.webp","/projects/project2/proj2S2.webp"]
  },
  {
    slug:"recipe-app",
    title:"Recipe sharing application",
    description:"description",
    image:"/projects/project3/proj3S1.webp",
    link:"/projects/recipe-app",
    images:["/projects/project3/proj3S1.webp","/projects/project3/proj3S2.webp"]
  },
  {
    slug:"portfolio-v1",
    title:"Portfolio v1",
    description:"portfolio",
    image:"/projects/project4/proj4S1.webp",
    link:"/projects/portfolio-v1",
    images:["/projects/project4/proj4S1.webp","/projects/project4/proj4S2.webp"]
  }
]
