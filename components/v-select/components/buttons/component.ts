import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";

import VButton from "~/components/v-button/component/component";

import {
  VSelectDataInterface,
  VSelectDataValueEnum,
} from "~/factories/v-select/factory";
import {
  UiIconActiveClass,
  UiIconDefaultActiveClass,
  UiItemActiveClass,
  UiItemDefaultActiveClass,
} from "./constants";

@Component({
  name: "v-select-buttons",
  components: {
    VButton,
  },
})
export default class VSelectButtons extends Vue {
  @Prop({
    type: Array,
    default: () => [],
  })
  readonly data: VSelectDataInterface[];
  @Prop({
    type: String,
    required: true,
  })
  readonly value: VSelectDataValueEnum;

  handleItemIsActive(item: VSelectDataInterface): string {
    return item.value === this.value
      ? UiItemActiveClass
      : UiItemDefaultActiveClass;
  }

  handleIconIsActive(item: VSelectDataInterface): string {
    return item.value === this.value
      ? UiIconActiveClass
      : UiIconDefaultActiveClass;
  }

  handleButtonIsDisabled(item: VSelectDataInterface): boolean {
    return item.value === this.value;
  }

  @Emit("select")
  handleItem(): void {}
}
