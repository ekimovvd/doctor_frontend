import { Component, Prop, Vue } from "nuxt-property-decorator";

import VImg from "~/components/v-img/component/component";

import { VLogoParamsInterface } from "~/factories/v-logo/factory";

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

  get view() {
    return this.params.style;
  }
}
