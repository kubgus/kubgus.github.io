// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Jakub Gustafik",
      meta: [
        {
          name: "description",
          content:
            "My name is Jakub, but you can call me Kubo. I am a student from Slovakia. This page contains all my public projects and information.",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "./assets/css/main.css",
        },
      ],
    },
  },
});
