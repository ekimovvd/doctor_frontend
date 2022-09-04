import { Component, Prop, Vue } from "nuxt-property-decorator";

import VImgLogo from "../components/logo/component";

import {
  VImgParamsInterface,
  VImgParamsTypeEnum,
} from "~/factories/v-img/factory";

@Component({
  name: "v-img",
  components: {
    "logo-component": VImgLogo,
  },
})
export default class VImg extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly params: VImgParamsInterface;

  get getComponent(): VImgParamsTypeEnum {
    return this.params.type;
  }
}
