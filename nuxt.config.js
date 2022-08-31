export default {
  head: {
    title: "Doctor",
    htmlAttrs: {
      lang: "ru",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap",
      },
    ],
  },

  css: ["~/assets/scss/main.scss", "boxicons/css/boxicons.min.css"],

  plugins: ["~/plugins/vue-bem-cn.ts"],

  components: true,

  buildModules: ["@nuxt/typescript-build"],

  modules: ["@/modules/home/index.ts", "@nuxtjs/style-resources"],

  styleResources: {
    scss: ["./assets/scss/*.scss"],
  },

  axios: {
    baseURL: "/",
  },
};
