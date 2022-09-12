import { Component, Vue } from "nuxt-property-decorator";

import VButton from "~/components/v-button/component/component";

import { UiButtonSun, UiButtonMoon } from "./constants";
import { VButtonParamsInterface } from "~/factories/v-button/factory";
import { VThemeEnum } from "~/factories/v-theme/factory";

@Component({
  name: "v-navbar-theme",
  components: {
    VButton,
  },
})
export default class VNavbarTheme extends Vue {
  public theme = "sun";

  readonly UiButtonSun: VButtonParamsInterface = UiButtonSun;

  get getUiButton(): VButtonParamsInterface {
    switch (this.theme) {
      case VThemeEnum.sun:
        return UiButtonMoon;
      case VThemeEnum.moon:
        return UiButtonSun;
      default:
        return UiButtonSun;
    }
  }

  handleTheme() {
    switch (this.theme) {
      case VThemeEnum.sun:
        this.theme = VThemeEnum.moon;
        break;
      case VThemeEnum.moon:
        this.theme = VThemeEnum.sun;
      default:
        break;
    }
  }
}
