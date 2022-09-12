import { Component, Vue } from "nuxt-property-decorator";

import VNavbar from "~/components/v-navbar/component/component";

@Component({
  name: "default",
  components: {
    VNavbar,
  },
})
export default class Default extends Vue {}
