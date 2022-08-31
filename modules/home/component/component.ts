import { Component, Vue } from "nuxt-property-decorator";

import { COMPONENT_NAME } from "./attributes";

@Component({
  name: COMPONENT_NAME,
})
export default class Home extends Vue {}
