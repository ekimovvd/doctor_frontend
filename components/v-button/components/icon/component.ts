import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";

import {
  VButtonParamsInterface,
  VButtonParamsStyleEnum,
} from "~/factories/v-button/factory";

@Component({
  name: "v-button-icon",
})
export default class VButtonIcon extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly params: VButtonParamsInterface;
  @Prop({
    type: Boolean,
    default: false,
  })
  readonly active: boolean;
  @Prop({
    type: Boolean,
    default: false,
  })
  readonly disabled: boolean;

  get view(): VButtonParamsStyleEnum {
    return this.params.style;
  }

  @Emit("click")
  handleClick(): void {}
}
