export type StackItem = {
  name: string
  src: string
  alt: string
  href: string
}

export type StackCategory = {
  name: string
  items: StackItem[]
}

export const stackCategories: StackCategory[] = [
  {
    name: "Programming Languages",
    items: [
      {
        name: "JavaScript",
        src: "/icons/JavaScript.svg",
        alt: "JavaScript icon",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "TypeScript",
        src: "/icons/TypeScript.svg",
        alt: "TypeScript icon",
        href: "https://www.typescriptlang.org/",
      },
      {
        name: "Java",
        src: "/icons/Java-Dark.svg",
        alt: "Java icon",
        href: "https://www.java.com/",
      },
    ],
  },
  {
    name: "Frontend Frameworks & Libraries",
    items: [
              {
        name: "React",
        src: "/icons/React-Dark.svg",
        alt: "React icon",
        href: "https://reactjs.org/",
      },
      {
        name: "Next.js",
        src: "/icons/NextJS-Dark.svg",
        alt: "Next.js icon",
        href: "https://nextjs.org/",
      },
      {
        name: "TailwindCSS",
        src: "/icons/TailwindCSS-Dark.svg",
        alt: "Tailwind CSS icon",
        href: "https://tailwindcss.com/",
      },
      {
        name:"Shadcn UI",
        src:"/icons/shadcn.svg",
        alt:"Shadcn UI icon",
        href:"https://ui.shadcn.com/"
      }

    ],
  },
  {
    name: "Backend Frameworks & Libraries",
    items: [
      {
        name: "Node.js",
        src: "/icons/NodeJS-Dark.svg",
        alt: "Node.js icon",
        href: "https://nodejs.org/",
      },
      {
        name: "Express.js",
        src: "/icons/ExpressJS-Dark.svg",
        alt: "Express.js icon",
        href: "https://expressjs.com/",
      },
      {
        name: "Prisma",
        src: "/icons/Prisma.svg",
        alt: "Prisma icon",
        href: "https://www.prisma.io/",
      },
      {
        name: "Spring",
        src: "/icons/Spring-Dark.svg",
        alt: "Spring icon",
        href: "https://spring.io/",
      },
      {
        name: "Firebase",
        src: "/icons/Firebase-Dark.svg",
        alt: "Firebase icon",
        href: "https://firebase.google.com/",
      },
    ],
  },
  {
    name: "Databases",
    items: [
      {
        name: "MongoDB",
        src: "/icons/MongoDB.svg",
        alt: "MongoDB icon",
        href: "https://www.mongodb.com/",
      },
      {
        name: "PostgreSQL",
        src: "/icons/PostgreSQL-Dark.svg",
        alt: "PostgreSQL icon",
        href: "https://www.postgresql.org/",
      },
      {
        name: "MySQL",
        src: "/icons/MySQL-Dark.svg",
        alt: "MySQL icon",
        href: "https://www.mysql.com/",
      },
    ],
  },
  {
    name: "Dev Tools & Platforms",
    items: [
      {
        name: "Git",
        src: "/icons/Git.svg",
        alt: "Git icon",
        href: "https://git-scm.com/",
      },
      {
        name: "GitHub",
        src: "/icons/Github-Dark.svg",
        alt: "GitHub icon",
        href: "https://github.com/",
      },
      {
        name: "Postman",
        src: "/icons/Postman.svg",
        alt: "Postman icon",
        href: "https://www.postman.com/",
      },
      {
        name: "VS Code",
        src: "/icons/VSCode-Dark.svg",
        alt: "VS Code icon",
        href: "https://code.visualstudio.com/",
      },
      {
        name: "IntelliJ IDEA",
        src: "/icons/Idea-Dark.svg",
        alt: "IntelliJ IDEA icon",
        href: "https://www.jetbrains.com/idea/",
      },
      {
        name: "Figma",
        src: "/icons/Figma-Dark.svg",
        alt: "Figma icon",
        href: "https://www.figma.com/",
      },
      {
        name: "Vercel",
        src: "/icons/Vercel-Dark.svg",
        alt: "Vercel icon",
        href: "https://vercel.com/",
      },
      {
        name: "Netlify",
        src: "/icons/Netlify-Dark.svg",
        alt: "Netlify icon",
        href: "https://www.netlify.com/",
      },
      {
        name: "Linux",
        src: "/icons/Linux-Dark.svg",
        alt: "Linux icon",
        href: "https://www.linux.org/",
      },
    ],
  },
]
