import { Component, Vue } from "nuxt-property-decorator";

import VLogo from "~/components/v-logo/component/component";

import { UiLogo } from "./constants";
import { VLogoParamsInterface } from "~/factories/v-logo/factory";

@Component({
  name: "v-navbar-logo",
  components: {
    VLogo,
  },
})
export default class VNavbarLogo extends Vue {
  readonly UiLogo: VLogoParamsInterface = UiLogo;
}
