import { Component, Vue } from "nuxt-property-decorator";

import VButton from "~/components/v-button/component/component";
import VSelect from "~/components/v-select/component/component";

import vClickOutside from "v-click-outside";

import { UiButton, UiSelect, UiSelectData } from "./constants";
import { VButtonParamsInterface } from "~/factories/v-button/factory";
import {
  VSelectDataInterface,
  VSelectParamsInterface,
} from "~/factories/v-select/factory";

@Component({
  name: "v-navbar-profile",
  components: {
    VButton,
    VSelect,
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
})
export default class VNavbarProfile extends Vue {
  readonly UiButton: VButtonParamsInterface = UiButton;
  readonly UiSelect: VSelectParamsInterface = UiSelect;
  readonly UiSelectData: VSelectDataInterface[] = UiSelectData;

  public UiSelectIsShow: boolean = false;

  get show(): boolean {
    return this.UiSelectIsShow;
  }

  handleUiSelectIsShow(): void {
    this.UiSelectIsShow = !this.UiSelectIsShow;
  }

  handleUiSelectClose(): void {
    this.UiSelectIsShow = false;
  }
}
