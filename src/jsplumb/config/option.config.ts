/**
 * @file 端点配置
 */

let uid = 0;
export function getOptionId() {
    return `point_id_${uid++}`;
}