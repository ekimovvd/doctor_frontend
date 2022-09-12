import { Component, Prop, Vue } from "nuxt-property-decorator";

import VImg from "~/components/v-img/component/component";

import {
  VLogoParamsInterface,
  VLogoParamsStyleEnum,
} from "~/factories/v-logo/factory";
import { UiLabel } from "./constants";

@Component({
  name: "v-logo-avatar-text",
  components: {
    VImg,
  },
})
export default class VLogoAvatarText extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly params: VLogoParamsInterface;

  readonly UiLabel = UiLabel;

  get view(): VLogoParamsStyleEnum {
    return this.params.style;
  }
}
