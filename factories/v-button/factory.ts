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
}

export enum VButtonParamsLabelEnum {}

export enum VButtonParamsIconEnum {}

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
