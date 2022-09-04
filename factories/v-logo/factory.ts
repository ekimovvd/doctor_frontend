import { VImgParamsFactory, VImgParamsInterface } from "../v-img/factory";

export interface VLogoParamsInterface {
  type: VLogoParamsTypeEnum;
  img: VImgParamsInterface;
  to?: VLogoParamsToEnum;
  style?: VLogoParamsStyleEnum;
}

export enum VLogoParamsTypeEnum {
  avatarText = "avatar-text-component",
}

export enum VLogoParamsToEnum {
  home = "/",
}

export enum VLogoParamsStyleEnum {
  light = "light",
}

export const VLogoParamsFactory = (
  params: Partial<VLogoParamsInterface> = {}
): VLogoParamsInterface => {
  return {
    type: VLogoParamsTypeEnum.avatarText,
    img: VImgParamsFactory(),
    ...params,
  };
};
