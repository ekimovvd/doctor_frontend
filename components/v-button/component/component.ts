import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";

import VButtonIcon from "../components/icon/component";
import VButtonIconText from "../components/icon-text/component";
import VButtonText from "../components/text/component";

import {
  VButtonParamsInterface,
  VButtonParamsTypeEnum,
} from "~/factories/v-button/factory";

@Component({
  name: "v-button",
  components: {
    "icon-component": VButtonIcon,
    "icon-text-component": VButtonIconText,
    "text-component": VButtonText,
  },
})
export default class VButton extends Vue {
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

  get getComponent(): VButtonParamsTypeEnum {
    return this.params.type;
  }

  @Emit("click")
  handleClick(): void {}
}
