/**
 * @file error info
 */
'use strict';

export function getRouterError(msg) {
    return {
        errno: -1,
        msg: msg,
        type: 'router'
    };
}

export function getFaceError(msg) {
    return {
        errno: -1,
        msg: msg,
        type: 'facelist'
    };
};

export function getSimilarError(msg) {
    return {
        errno: -1,
        msg: msg,
        type: 'similarlist'
    };
};

export function getProductError(msg) {
    return {
        errno: -1,
        msg: msg,
        type: 'productlist'
    };
};

export function getSourceError(msg) {
    return {
        errno: -1,
        msg: msg,
        type: 'sourcelist'
    };
}

export function getWallpaperError(msg) {
    return {
        errno: -1,
        msg: msg,
        type: 'card-wallpeper'
    };
};

export function getCarError(msg) {
    return {
        errno: -1,
        msg: msg,
        type: 'card-car'
    };
};

export function getSameError(msg) {
    return {
        errno: -1,
        msg: msg,
        type: 'samelist'
    };
}


export function getUploadError(msg) {
    return {
        errno: -1,
        msg: msg,
        type: 'img-upload'
    };
}

export function getDownloadError(msg) {
    return {
        errno: -1,
        msg: msg,
        type: 'img-download'
    };
};

export function getSearchError(msg) {
    return {
        errno: -1,
        msg: msg,
        type: 'searchlist'
    };
};

export function getDetectError(msg) {
    return {
        errno: -1,
        msg: msg,
        type: 'detect'
    };
};
