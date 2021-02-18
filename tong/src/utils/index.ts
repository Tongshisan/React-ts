/*
 * @Author: your name
 * @Date: 2021-02-14 17:52:27
 * @LastEditTime: 2021-02-14 20:16:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-ts/tong/src/utils/index.ts
 */
const utils = {
    /**
     * @description: 获取彩票随机数, 
     * @param {any} type 0: 蓝球数字, 1 <= n <= 33, 1: 红球数字: 1 <= n <= 16
     * @return {*}
     */    
    getRandomNum(type: any, nums: any): any {
        const num: number = +(Math.random()*100).toFixed(0);
        if (!num) {
            return this.getRandomNum(type, nums);
        }
        if (type === 0) {
            // if (num >= 1 && num <= 33) {
            //     return num
            // } else {
            //     return this.getRandomNum(type, nums);
            // }
            if (num < 1 || num > 33 || nums.includes(num)) {
                return this.getRandomNum(type, nums);
            } else {
                return num;
            }
        } else {
            if (num >= 1 && num <= 16) {
                return num;
            } else {
                return this.getRandomNum(type, nums);
            }
        }
    }
}

export default utils;