export type StackItem = {
  name: string
  src: string
  href: string
}

export type StackCategoryData = {
  categoryKey: string
  items: StackItem[]
}

export const stackCategories: StackCategoryData[] = [
  {
    categoryKey: "programmingLanguages",
    items: [
      {
        name: "JavaScript",
        src: "/icons/JavaScript.svg",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "TypeScript",
        src: "/icons/TypeScript.svg",
        href: "https://www.typescriptlang.org/",
      },
      {
        name: "Java",
        src: "/icons/Java-Dark.svg",
        href: "https://www.java.com/",
      },
    ],
  },
  {
    categoryKey: "frontendFrameworks",
    items: [
      {
        name: "React",
        src: "/icons/React-Dark.svg",
        href: "https://reactjs.org/",
      },
      {
        name: "Next.js",
        src: "/icons/NextJS-Dark.svg",
        href: "https://nextjs.org/",
      },
      {
        name: "TailwindCSS",
        src: "/icons/TailwindCSS-Dark.svg",
        href: "https://tailwindcss.com/",
      },
      {
        name: "Shadcn UI",
        src: "/icons/shadcn.svg",
        href: "https://ui.shadcn.com/",
      },
    ],
  },
  {
    categoryKey: "backendFrameworks",
    items: [
      {
        name: "Node.js",
        src: "/icons/NodeJS-Dark.svg",
        href: "https://nodejs.org/",
      },
      {
        name: "Express.js",
        src: "/icons/ExpressJS-Dark.svg",
        href: "https://expressjs.com/",
      },
      {
        name: "Prisma",
        src: "/icons/Prisma.svg",
        href: "https://www.prisma.io/",
      },
      {
        name: "Spring",
        src: "/icons/Spring-Dark.svg",
        href: "https://spring.io/",
      },
      {
        name: "Firebase",
        src: "/icons/Firebase-Dark.svg",
        href: "https://firebase.google.com/",
      },
    ],
  },
  {
    categoryKey: "databases",
    items: [
      {
        name: "MongoDB",
        src: "/icons/MongoDB.svg",
        href: "https://www.mongodb.com/",
      },
      {
        name: "PostgreSQL",
        src: "/icons/PostgreSQL-Dark.svg",
        href: "https://www.postgresql.org/",
      },
      {
        name: "MySQL",
        src: "/icons/MySQL-Dark.svg",
        href: "https://www.mysql.com/",
      },
    ],
  },
  {
    categoryKey: "devTools",
    items: [
      {
        name: "Git",
        src: "/icons/Git.svg",
        href: "https://git-scm.com/",
      },
      {
        name: "GitHub",
        src: "/icons/Github-Dark.svg",
        href: "https://github.com/",
      },
      {
        name: "Docker",
        src: "/icons/Docker.svg",
        href: "https://www.docker.com/",
      },
      {
        name: "Postman",
        src: "/icons/Postman.svg",
        href: "https://www.postman.com/",
      },
      {
        name: "VS Code",
        src: "/icons/VSCode-Dark.svg",
        href: "https://code.visualstudio.com/",
      },
      {
        name: "IntelliJ",
        src: "/icons/Idea-Dark.svg",
        href: "https://www.jetbrains.com/idea/",
      },
      {
        name: "Figma",
        src: "/icons/Figma-Dark.svg",
        href: "https://www.figma.com/",
      },
      {
        name: "Vercel",
        src: "/icons/Vercel-Dark.svg",
        href: "https://vercel.com/",
      },
      {
        name: "Linux",
        src: "/icons/Linux-Dark.svg",
        href: "https://www.linux.org/",
      },
    ],
  },
]
