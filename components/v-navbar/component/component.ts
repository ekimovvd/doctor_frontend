import { Component, Vue } from "nuxt-property-decorator";

import VNavbarLogo from "../components/logo/component";
import VNavbarProfile from "../components/profile/component";
import VNavbarTheme from "../components/theme/component";
import VNavbarLanguage from "../components/language/component";

@Component({
  name: "v-navbar",
  components: {
    VNavbarLogo,
    VNavbarProfile,
    VNavbarTheme,
    VNavbarLanguage,
  },
})
export default class VNavbar extends Vue {}
