import { VuexModule, Module } from "vuex-module-decorators";

@Module({
  namespaced: true,
  stateFactory: true,
  name: "home",
})
export default class HomeModuleState extends VuexModule {}
