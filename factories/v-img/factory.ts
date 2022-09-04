export interface VImgParamsInterface {
  type: VImgParamsTypeEnum;
}

export enum VImgParamsTypeEnum {
  logo = "logo-component",
}

export const VImgParamsFactory = (
  params: Partial<VImgParamsInterface> = {}
): VImgParamsInterface => {
  return {
    type: VImgParamsTypeEnum.logo,
    ...params,
  };
};
