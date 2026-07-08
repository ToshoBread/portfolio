import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://zndionisio.pages.dev",
  integrations: [tailwind()],
});

