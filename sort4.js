//选择排序
//其实就是外层的一个个去跟内层去比，小的放左边，需要两个循环

function selectSort(arr){
    var len =arr.length;
    for (let out = 0; out < len - 1; index++) {
        for (let inner = out; inner < len; index++) {
            if(arr[out] >  arr[inner]){
                [arr[out],arr[inner]] = [arr[inner],arr[out]]
            }
            
        }
        
    }
}