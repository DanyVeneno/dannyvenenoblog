import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

//https://pacamara-astro-6y7xr.kinsta.page
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  site: "https://ybestudio.website/",
});
