export interface VButtonParamsInterface {
  type: VButtonParamsTypeEnum;
  label?: VButtonParamsLabelEnum;
  icon?: VButtonParamsIconEnum;
  style?: VButtonParamsStyleEnum;
}

export enum VButtonParamsTypeEnum {
  icon = "icon-component",
  text = "text-component",
  iconText = "icon-text-component",
  svgText = "svg-text-component",
  select = "select-component",
}

export enum VButtonParamsLabelEnum {
  profile = "Профиль",
}

export enum VButtonParamsIconEnum {
  user = "bx bxs-user",
  sun = "bx bxs-sun",
  moon = "bx bxs-moon",
  globe = "bx bx-globe",
}

export enum VButtonParamsStyleEnum {
  light = "light",
  secondary = "secondary",
  primary = "primary",
}

export const VButtonParamsFactory = (
  params: Partial<VButtonParamsInterface> = {}
): VButtonParamsInterface => {
  return {
    type: VButtonParamsTypeEnum.text,
    ...params,
  };
};
