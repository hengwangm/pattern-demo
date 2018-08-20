/**
 * 冒泡排序
 * 基本思路,
 * 两个循环，内存循环每次和右侧相比，将最大的一支往右移动，就像冒泡一样
 */

function bubblingSort(arr) {
    for (let length = arr.length; length > 1; length--) {
        for (let index = 0; index < length - 1; index++) {
            let temp = arr[index];
            if (temp > arr[index + 1]) {
                arr[index] = arr[index + 1];
                arr[index + 1] = temp;
            }
        }
    }
    return arr;
}
const arr = [3, 4, 5, 4, 9, 4, 6, 7];
bubblingSort(arr)