export interface VSelectParamsInterface {
  type: VSelectParamsTypeEnum;
}

export interface VSelectDataInterface {
  label?: VSelectDataLabelEnum;
  iconSelected?: VSelectDataIconSelectedEnum;
  value?: VSelectDataValueEnum;
  to?: VSelectDataToEnum;
  icon?: VSelectDataIconEnum;
}

export enum VSelectParamsTypeEnum {
  buttons = "buttons-component",
  links = "links-component",
}

export enum VSelectDataLabelEnum {
  ru = "Русский язык",
  en = "Английский язык",
  profile = "Профиль",
  messages = "Сообщения",
}

export enum VSelectDataIconSelectedEnum {
  check = "bx bx-check",
}

export enum VSelectDataValueEnum {
  ru = "ru",
  en = "en",
}

export enum VSelectDataToEnum {
  profile = "/profile",
  messages = "/messages",
}

export enum VSelectDataIconEnum {
  profile = "bx bxs-user",
  messages = "bx bxs-chat",
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
