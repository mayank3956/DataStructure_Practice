function binarySearch(arr, size, key){
    let left = 0;
    let right = arr.length-1;
    let mid;

    while(left<=right){
        console.log(left,right);
        mid= Math.round((left+right)/2);
        console.log(mid);
        if(arr[mid] === key)
        {
            return true;
        }
        if(key < arr[mid])
        {
        right = mid -1;
        }
        else{
            left = mid+1;
        }
    }
    return -1;
}

let array = [1,2,4,6,8];
const key = 22;
const size = array.length-1;

console.log(binarySearch( array, size,key))