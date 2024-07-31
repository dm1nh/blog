import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import mdx from "@astrojs/mdx"

import expressiveCode from "astro-expressive-code"

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    expressiveCode({
      themes: ["one-dark-pro"],
      styleOverrides: {
        borderColor: "transparent",
        codeFontSize: "1.25em",
        codeLineHeight: "1.5",
      },
    }),
    mdx(),
  ],
})

