import { Component, Vue } from "nuxt-property-decorator";

import VButton from "~/components/v-button/component/component";

import { UiButton } from "./constants";
import { VButtonParamsInterface } from "~/factories/v-button/factory";

@Component({
  name: "v-navbar-profile",
  components: {
    VButton,
  },
})
export default class VNavbarProfile extends Vue {
  readonly UiButton: VButtonParamsInterface = UiButton;

  handleProfile(): void {
    console.log("profile");
  }
}
