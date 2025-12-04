import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/edge";

export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: vercel(),
  image: {
    service: passthroughImageService(),
  },
});
