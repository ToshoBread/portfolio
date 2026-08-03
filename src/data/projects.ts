import { projectImages } from "./project-images";
import type { ImageMetadata } from "astro";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  repo?: string;
  live?: string;
  images?: ImageMetadata[];
}

export const projects: Project[] = [
  {
    title: "Filtered Feels",
    description:
      'Anonymous "freedom wall" web app. Post and vent without a name attached. My first real deploy: CI through GitHub Actions, hosted on InfinityFree, and learning that not everything that looks right on my machine works on another.',
    tags: ["PHP", "Bootstrap CSS", "MySQL"],
    repo: "https://github.com/ToshoBread/filtered-feels",
    live: "https://filteredfeels.42web.io",
    images: projectImages.filteredFeels,
  },
  {
    title: "B-Sync",
    description:
      "Barangay Information Management System for managing records, residents, and documents. Built as coursework, first actual system with Laravel, PostgreSQL instead of MySQL because I wanted to learn it.",
    tags: ["Laravel", "Bootstrap CSS", "PostgreSQL"],
    repo: "https://github.com/ToshoBread/B-Sync",
    images: projectImages.bSync,
  },
  {
    title: "Portfolio",
    description:
      "You're looking at it. Astro for the first time (because I love component systems and static sites don't need a JS runtime), Tailwind because it just works, and Rose Pine because dark themes are non-negotiable.",
    tags: ["Typescript", "Astro", "Tailwind CSS"],
    repo: "https://github.com/ToshoBread/portfolio",
  },
];
