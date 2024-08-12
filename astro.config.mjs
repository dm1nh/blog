import mdx from "@astrojs/mdx"
import tailwind from "@astrojs/tailwind"
import expressiveCode from "astro-expressive-code"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    expressiveCode({
      themes: ["one-dark-pro"],
      styleOverrides: {
        borderRadius: "2px",
        borderColor: "transparent",
        codeFontSize: "1.25em",
        codeLineHeight: "1.5",
      },
    }),
    mdx(),
  ],
})
