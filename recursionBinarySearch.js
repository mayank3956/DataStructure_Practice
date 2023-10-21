function binarySearch(arr, left, right, key){
    debugger

    // while(left<=right){
        console.log(left,right);
        let mid= Math.round((left+right)/2);
        console.log(mid);
        if(left > right){
            return false;
        }
        if(arr[mid] === key)
        {
            return true;
        }
        if(key < arr[mid])
        {
       const searchEle = binarySearch(arr,left, mid-1, key)
       return searchEle;
        }
        else{
            const searchEle = binarySearch(arr, mid+1,right, key)
            return searchEle
        }
}

let array = [1,2,4,6,8, 10, 13, 14, 15, 18, 19, 21, 22];
const key = 114;
const size = array.length-1;
let left = 0;
let right = size;

console.log(binarySearch( array, left, right,key))