/**
 * 快速排序
 * 分而治之，
 * 去一个中间点，小于的左边往左边房，大于的放右边
 */
function qSort(arr) {
    if (arr.length == 0) {
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0]; //中间点
    for (var i = 1; i < arr.length; i++) { // 注意这里的起始值，因为有一个作为flag了
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return qSort(left).concat(pivot, qSort(right));
}