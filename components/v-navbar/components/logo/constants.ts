import {
  VLogoParamsFactory,
  VLogoParamsInterface,
  VLogoParamsStyleEnum,
  VLogoParamsToEnum,
} from "~/factories/v-logo/factory";

export const UiLogo: VLogoParamsInterface = VLogoParamsFactory({
  to: VLogoParamsToEnum.home,
  style: VLogoParamsStyleEnum.light,
});
