import { Component, Vue } from "nuxt-property-decorator";

import VButton from "~/components/v-button/component/component";
import VSelect from "~/components/v-select/component/component";

import vClickOutside from "v-click-outside";

import { UiButton, UiSelect, UiSelectData } from "./constants";
import { VButtonParamsInterface } from "~/factories/v-button/factory";
import {
  VSelectDataInterface,
  VSelectDataValueEnum,
  VSelectParamsInterface,
} from "~/factories/v-select/factory";

@Component({
  name: "v-navbar-language",
  components: {
    VButton,
    VSelect,
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
})
export default class VNavbarLanguage extends Vue {
  readonly UiButton: VButtonParamsInterface = UiButton;
  readonly UiSelect: VSelectParamsInterface = UiSelect;
  readonly UiSelectData: VSelectDataInterface[] = UiSelectData;

  public UiSelectIsShow: boolean = false;
  public language: VSelectDataValueEnum = VSelectDataValueEnum.ru;

  get show(): boolean {
    return this.UiSelectIsShow;
  }

  handleUiSelectIsShow(): void {
    this.UiSelectIsShow = !this.UiSelectIsShow;
  }

  handleUiSelectClose(): void {
    this.UiSelectIsShow = false;
  }

  handleLanguage(language: VSelectDataInterface): void {
    this.language = language.value;
  }
}
