export type projectBase = {
  slug?: string
  title: string
  description: string
  image: string
  link: string
}
export type projectWithExtraData = projectBase & {
  images: Array<string>
  githubUrl?: string
  liveDemoUrl?: string
  longDescription: string
}

export const projects: Array<projectWithExtraData> = [
  {
    slug: "textile-pro",
    title: "Textile Facility Admin Dashboard",
    description: "Full-stack admin dashboard for textile production management with worker tracking, product oversight, and AI insights built with React, TypeScript, and Tailwind CSS.",
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
    githubUrl: "https://github.com/Njahi98/textile-frontend",
    liveDemoUrl: "https://textilepro.netlify.app/",
    longDescription: `• Developed a full-stack admin dashboard to streamline textile production management, including worker tracking, product oversight, production line monitoring, and AI insights.

• Built with React, TypeScript, and Tailwind CSS, featuring advanced tables (TanStack), dynamic forms (React Hook Form + Zod), and global state with Zustand.

• Enhanced user experience with shadcn/ui components and real-time data fetching via SWR/Axios.

• Designed and integrated a secure Express/Prisma backend with authentication and role-based access control.`,
  },
  {
    slug: "erp-project",
    title: "Enhancing an ERP Project",
    description: "Internship project featuring admin dashboard, internship management system with Google Meet scheduling, WebSocket real-time notifications, and employee training module.",
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
    longDescription: `During my internship (iWare, Sousse):
• Built admin dashboard with React, Spring Boot and JWT for managing user roles and access control

• Created internship management system with Google Meet scheduling for interviews

• Set up WebSocket system for push and in-app notifications and real time messaging with MongoDB for storage

• Developed training module to help manage employee professional development`,
  },
  {
    slug: "recipe-app",
    title: "Recipe sharing application",
    description: "Full-stack recipe platform with secure JWT authentication, image handling pipeline using GridFS and Sharp.js, and comprehensive REST API with MongoDB.",
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
    githubUrl: "https://github.com/Njahi98/Recipe-Management-Application",
    liveDemoUrl: "https://recipe-management-application-1.onrender.com/",
    longDescription: `• Developed full-stack recipe platform with Node.js/Express, implementing JWT authentication and role-based access for admin/user/guest accounts

• Built secure image handling pipeline using GridFS, Multer and Sharp.js for processing, with MongoDB/Mongoose schemas for optimized data relationships

• Developed REST API for Recipe, Reviews, Users and Profiles with middleware authorization, comprehensive error handling, and EJS server-side rendering.`,
  },
  {
    slug: "portfolio-v1",
    title: "Portfolio v1",
    description: "Responsive portfolio built with HTML5, CSS3, JavaScript, and React featuring smooth Framer Motion animations and integrated EmailJS contact form.",
    image: "/projects/project4/proj4S1.webp",
    link: "/projects/portfolio-v1",
    images: [
      "/projects/project4/proj4S1.webp",
      "/projects/project4/proj4S2.webp",
      "/projects/project4/proj4S3.webp",
      "/projects/project4/proj4S4.webp",
    ],
    githubUrl: "https://github.com/Njahi98/MyPortfolioV1",
    liveDemoUrl: "https://njahi-oussama.netlify.app/",
    longDescription: `• Built Portfolio v1 using HTML5, CSS3, JavaScript, and React for a responsive, modern interface. 

• Enhanced with Framer Motion to create smooth animations and dynamic transitions. 

• Form validation and state handling powered by React Hook Form for efficiency and performance.

• Integrated EmailJS for seamless contact form functionality. `,
  },
]
