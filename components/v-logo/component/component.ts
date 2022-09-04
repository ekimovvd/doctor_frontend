import { Component, Prop, Vue } from "nuxt-property-decorator";

import VLogoAvatarText from "../components/avatar-text/component";

import {
  VLogoParamsInterface,
  VLogoParamsTypeEnum,
} from "~/factories/v-logo/factory";

@Component({
  name: "v-logo",
  components: {
    "avatar-text-component": VLogoAvatarText,
  },
})
export default class VLogo extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly params: VLogoParamsInterface;

  get getComponent(): VLogoParamsTypeEnum {
    return this.params.type;
  }
}
