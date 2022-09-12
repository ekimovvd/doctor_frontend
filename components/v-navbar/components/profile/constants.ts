import {
  VButtonParamsFactory,
  VButtonParamsIconEnum,
  VButtonParamsInterface,
  VButtonParamsLabelEnum,
  VButtonParamsStyleEnum,
  VButtonParamsTypeEnum,
} from "~/factories/v-button/factory";

export const UiButton: VButtonParamsInterface = VButtonParamsFactory({
  type: VButtonParamsTypeEnum.iconText,
  label: VButtonParamsLabelEnum.profile,
  icon: VButtonParamsIconEnum.user,
  style: VButtonParamsStyleEnum.light,
});
