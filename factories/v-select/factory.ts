export interface VSelectParamsInterface {
  type: VSelectParamsTypeEnum;
}

export interface VSelectDataInterface {
  label?: VSelectDataLabelEnum;
  iconSelected?: VSelectDataIconSelectedEnum;
  value?: VSelectDataValueEnum;
}

export enum VSelectParamsTypeEnum {
  buttons = "buttons-component",
}

export enum VSelectDataLabelEnum {
  ru = "Русский язык",
  en = "Английский язык",
}

export enum VSelectDataIconSelectedEnum {
  check = "bx bx-check",
}

export enum VSelectDataValueEnum {
  ru = "ru",
  en = "en",
}

export const VSelectParamsFactory = (
  params: Partial<VSelectParamsInterface> = {}
): VSelectParamsInterface => {
  return {
    type: VSelectParamsTypeEnum.buttons,
    ...params,
  };
};

export const VSelectDataFactory = (
  params: Partial<VSelectDataInterface> = {}
): VSelectDataInterface => {
  return {
    ...params,
  };
};
