import 'whatwg-fetch';
// import React from 'react';
// import Cookie from 'js-cookie';


const $$ = {};

/**
 * 是否为开发环境
 * @type {boolean}
 */
const isDev = !(process.env.NODE_ENV === 'production');

/**
 * 全局变量
 */
$$.globalConfig = {
    // 测试环境地址 http://mall.test.mi.com/api/
    // 预上线环境地址 http://mall.pre.mi.com/api/
    // 正式环境地址 https://mall.mi.com/api/
    // baseUrl: BASE_URL
};

/**
 * 判断是否为空对象
 * @param obj
 * @returns {boolean}
 */
$$.isEmptyObject = (obj) => {
    return !(Object.getOwnPropertyNames(obj).length > 0);
};

/**
 * 对象转数组
 * @param obj
 */
$$.objectToArray = (obj) => {
    if (!obj) return [];
    const arr = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr.push(obj[key]);
        }
    }
    return arr;
};

/**
 * 对象转换成request paraments string
 * @param obj
 * @param prefix
 */
$$.param = (obj, prefix) => {
    const str = [];
    for (let p in obj) {
        if (obj.hasOwnProperty(p)) {
            const k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
            str.push((v !== null && typeof v === "object") ? $$.param(v, k) :
                encodeURIComponent(k) + "=" + encodeURIComponent(v));
        }
    }
    return str.join("&");
};

// 登入&&登出
$$.login = () => {
    window.location.href = $$.globalConfig.baseUrl + 'mall/passport';
};
$$.logout = () => {
    window.location.href = $$.globalConfig.baseUrl + 'mall/logout';
};

/**
 * fetch方法再封装，url必填
 * @param ajaxOptions
 */
$$.fetch = (ajaxOptions) => {

    const apiurl = ajaxOptions.url;
    const data = ajaxOptions.data || {};
    const reqBody = $$.param(Object.assign({}, data, {apiurl}));
    return fetch($$.globalConfig.baseUrl + 'mall/run', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: reqBody,
        credentials: 'include'
    }).then(res => res.json()).then(res => new Promise((resolve, reject) => {
        if (res.header.code === 200) {
            // 正常状态
            resolve(res.body);
        } else {
            reject(res);
        }
    })).catch(err=>{});
};

/**
 * 图片响应式大小设置（服务端裁剪）
 * @param imageUrl 图片地址
 * @param width 生成图片宽度
 * @param height 生成图片高度
 * @param quality 生成图片质量
 */
$$.responsiveImage = (imageUrl, width = 200, height = 200, quality = 100) => {
    if (!imageUrl || !imageUrl.match(/(\.jpg|\.jpeg|\.png)/)) {
        imageUrl = '//c1.mifile.cn/f/i/16/placeholder/img-placeholder.png';
    }
    const size = `!${width}x${height}!${quality}`;
    return imageUrl.replace(/(\.jpg|\.jpeg|\.png)/, size + '$1');
};

export default $$;