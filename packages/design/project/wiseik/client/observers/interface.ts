/**
 * @file interfce defintion
 * 
 * @export
 */

export interface IBaseProps {}
export interface IBaseState {}

export interface ICommon {
    thumbImageUrl: string;
    query: string;
    uptype: string;
    word: string;
    guessWord: string;
    simid: string;
    tag: string;
    querySign: string;
    queryImageUrl: string;
    hs: string;
    caseurl: string;
    caseimg: string;
    https: string;
    queryType: string;
    vs: string;
    simiServer: string;
    redirectUrl: string;
    desc: string;
    _search: string;
}

/**
 * @interface 相机
 */
export interface ICamera {
    server: string;
    fr: string;
    vs: string;
}

/**
 * @interface 相似卡片
 */
export interface ISimilar {
    info: ICommon;
    all: Array<{}>;
    data: Array<{}>;
    tags: string;
    total: number;
    fetch(any): void;
}

/**
 * @interface 相似语义标签
 */
export interface ITag {
    tags: string;
    tagHandle(text: string): void;
}

/**
 * @interface 更多案例页
 */
export interface ICase {
    list: Array<{}>;
}

/**
 * @interface 结果页 props
 */
export interface IResult {
    info: ICommon;
    similarData: ISimilar;
    sourceCard: ISourceCard;
    sameCard: IInfoCard;
    plantCard: IPlantCard;
    videoCard: IVideoCard;
    productCard: IProductCard;
    fetchSimilarData(number): void;
    resizeShitu(): void;
}

/**
 * @interface 信息卡片
 */
export interface IInfoCard {
    info: ICommon;
    list: Array<{}>;
    total: number;
}

/**
 * @interface 来源卡片
 */
export interface ISourceCard {
    info: ICommon;
    list: Array<{}>;
    total: number;
}

/**
 * @interface 植物卡片
 */
export interface IPlantCard {
    info: ICommon;
    list: Array<{}>;
    total: number;
    flag: number;
    class: string;
}

/**
 * @interface 照片浏览浮层
 */
export interface IPhotoOverlay {}

/**
 * @interface 汽车卡片
 */
export interface IVideoCard {
    info: ICommon;    
    actor: string;
    img: string;
    lang: string;
    latestep: number;
    totalep: number;
    seclass: string;
    sitename: string;
    title: string;
    update: string;
    vlink: string;
    year: string;
}

/**
 * @interface 商品卡片
 */
export interface IProductCard {
    info: ICommon;
    data: Object;
    total: number;
}