import { projectImages } from "./project-images";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  repo?: string;
  live?: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    title: "Filtered Feels",
    description:
      'Anonymous "freedom wall" web app; post and vent without a name attached. My first real deploy: CI through GitHub Actions, hosted on InfinityFree, and learning that not everything that looks right on my machine also works perfectly fine on another.',
    tags: ["PHP", "Bootstrap CSS", "MySQL"],
    repo: "https://github.com/ToshoBread/filtered-feels",
    live: "https://filteredfeels.42web.io",
    images: projectImages.filteredFeels,
  },
  {
    title: "B-Sync",
    description:
      "Barangay Information Management System; manage records, residents, and documents for a local government unit. Built as coursework, but my first actual system using Laravel.",
    tags: ["Laravel", "Bootstrap CSS", "PostgreSQL"],
    repo: "https://github.com/ToshoBread/B-Sync",
    images: projectImages.bSync,
  },
  {
    title: "Portfolio",
    description: "You're looking at it.",
    tags: ["Typescript", "Astro", "Tailwind CSS"],
    repo: "https://github.com/ToshoBread/portfolio",
  },
];
