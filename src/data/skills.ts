export interface Skill {
  name: string;
  url?: string;
  bcp47?: string;
}

export interface SkillGroupData {
  title: string;
  accent: "rose" | "pine" | "iris" | "gold" | "foam";
  skills: Skill[];
}

export const skillGroups: SkillGroupData[] = [
  {
    title: "Programming",
    accent: "rose",
    skills: [
      { name: "TypeScript", url: "https://www.typescriptlang.org/" },
      { name: "PHP", url: "https://www.php.net/" },
      { name: "Java", url: "https://www.java.com/" },
      { name: "Python", url: "https://www.python.org/" },
      { name: "Lua", url: "https://www.lua.org/" },
      { name: "Bash", url: "https://www.gnu.org/software/bash/" },
      { name: "Typst", url: "https://typst.app/" },
    ],
  },
  {
    title: "Frameworks & Environments",
    accent: "pine",
    skills: [
      { name: "React", url: "https://react.dev/" },
      { name: "Vue", url: "https://vuejs.org/" },
      { name: "Astro", url: "https://astro.build/" },
      { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
      { name: "Bootstrap CSS", url: "https://getbootstrap.com/" },
      { name: "Pico CSS", url: "https://picocss.com/" },
      { name: "Node.js", url: "https://nodejs.org/" },
      { name: "Express", url: "https://expressjs.com/" },
    ],
  },
  {
    title: "Databases",
    accent: "foam",
    skills: [
      { name: "MySQL", url: "https://www.mysql.com/" },
      { name: "PostgreSQL", url: "https://www.postgresql.org/" },
      { name: "SQLite", url: "https://www.sqlite.org/" },
      { name: "MongoDB", url: "https://www.mongodb.com/" },
      { name: "Supabase", url: "https://supabase.com/" },
    ],
  },
  {
    title: "Tools",
    accent: "iris",
    skills: [
      { name: "Git", url: "https://git-scm.com/" },
      { name: "Docker", url: "https://www.docker.com/" },
      { name: "Neovim", url: "https://neovim.io/" },
      { name: "Opencode", url: "https://opencode.ai/" },
    ],
  },
  {
    title: "Communication",
    accent: "gold",
    skills: [
      { name: "Filipino", bcp47: "fil" },
      { name: "English", bcp47: "en" },
      { name: "Filipino Sign Language (Intermediate)", bcp47: "fsl" },
    ],
  },
];
