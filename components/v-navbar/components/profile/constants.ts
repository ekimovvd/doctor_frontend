import {
  VButtonParamsFactory,
  VButtonParamsIconEnum,
  VButtonParamsInterface,
  VButtonParamsLabelEnum,
  VButtonParamsStyleEnum,
  VButtonParamsTypeEnum,
} from "~/factories/v-button/factory";
import {
  VSelectDataFactory,
  VSelectDataIconEnum,
  VSelectDataInterface,
  VSelectDataLabelEnum,
  VSelectDataToEnum,
  VSelectParamsFactory,
  VSelectParamsInterface,
  VSelectParamsTypeEnum,
} from "~/factories/v-select/factory";

export const UiButton: VButtonParamsInterface = VButtonParamsFactory({
  type: VButtonParamsTypeEnum.iconText,
  label: VButtonParamsLabelEnum.profile,
  icon: VButtonParamsIconEnum.user,
  style: VButtonParamsStyleEnum.light,
});

export const UiSelect: VSelectParamsInterface = VSelectParamsFactory({
  type: VSelectParamsTypeEnum.links,
});
export const UiSelectData: VSelectDataInterface[] = [
  VSelectDataFactory({
    label: VSelectDataLabelEnum.profile,
    to: VSelectDataToEnum.profile,
    icon: VSelectDataIconEnum.profile,
  }),
  VSelectDataFactory({
    label: VSelectDataLabelEnum.messages,
    to: VSelectDataToEnum.messages,
    icon: VSelectDataIconEnum.messages,
  }),
];
