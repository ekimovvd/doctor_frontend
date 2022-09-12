import {
  VButtonParamsFactory,
  VButtonParamsIconEnum,
  VButtonParamsInterface,
  VButtonParamsStyleEnum,
  VButtonParamsTypeEnum,
} from "~/factories/v-button/factory";

export const UiButtonSun: VButtonParamsInterface = VButtonParamsFactory({
  type: VButtonParamsTypeEnum.icon,
  icon: VButtonParamsIconEnum.sun,
  style: VButtonParamsStyleEnum.light,
});

export const UiButtonMoon: VButtonParamsInterface = VButtonParamsFactory({
  type: VButtonParamsTypeEnum.icon,
  icon: VButtonParamsIconEnum.moon,
  style: VButtonParamsStyleEnum.light,
});
