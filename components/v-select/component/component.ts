import { Component, Emit, Prop, Vue } from "nuxt-property-decorator";

import VSelectButtons from "../components/buttons/component";
import VSelectLinks from "../components/links/component";

import {
  VSelectDataInterface,
  VSelectDataValueEnum,
  VSelectParamsInterface,
  VSelectParamsTypeEnum,
} from "~/factories/v-select/factory";

@Component({
  name: "v-select",
  components: {
    "buttons-component": VSelectButtons,
    "links-component": VSelectLinks,
  },
})
export default class VSelect extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly params: VSelectParamsInterface;
  @Prop({
    type: Array,
    default: () => [],
  })
  readonly data: VSelectDataInterface[];
  @Prop({
    type: String,
    default: "",
  })
  readonly value: VSelectDataValueEnum;

  get getComponent(): VSelectParamsTypeEnum {
    return this.params.type;
  }

  @Emit("select")
  handleSelect(): void {}
}
