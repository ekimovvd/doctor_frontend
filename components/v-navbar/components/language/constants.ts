import {
  VButtonParamsFactory,
  VButtonParamsIconEnum,
  VButtonParamsInterface,
  VButtonParamsStyleEnum,
  VButtonParamsTypeEnum,
} from "~/factories/v-button/factory";
import {
  VSelectDataFactory,
  VSelectDataIconSelectedEnum,
  VSelectDataInterface,
  VSelectDataLabelEnum,
  VSelectDataValueEnum,
  VSelectParamsFactory,
  VSelectParamsInterface,
} from "~/factories/v-select/factory";

export const UiButton: VButtonParamsInterface = VButtonParamsFactory({
  type: VButtonParamsTypeEnum.icon,
  icon: VButtonParamsIconEnum.globe,
  style: VButtonParamsStyleEnum.light,
});

export const UiSelect: VSelectParamsInterface = VSelectParamsFactory();
export const UiSelectData: VSelectDataInterface[] = [
  VSelectDataFactory({
    label: VSelectDataLabelEnum.ru,
    iconSelected: VSelectDataIconSelectedEnum.check,
    value: VSelectDataValueEnum.ru,
  }),
  VSelectDataFactory({
    label: VSelectDataLabelEnum.en,
    iconSelected: VSelectDataIconSelectedEnum.check,
    value: VSelectDataValueEnum.en,
  }),
];
