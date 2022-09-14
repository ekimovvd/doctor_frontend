import { Component, Prop, Vue } from "nuxt-property-decorator";

import { VSelectDataInterface } from "~/factories/v-select/factory";

@Component({
  name: "v-select-links",
})
export default class VSelectLinks extends Vue {
  @Prop({
    type: Array,
    default: () => [],
  })
  readonly data: VSelectDataInterface[];
}
