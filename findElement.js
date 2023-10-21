function search(arr, size, key){
    if(size === 0){
        return false;
    }
    if( arr[size] === key)
    {
        return true;
    }
    else{
       const searchStatus =  search(arr, size-1, key);
       return searchStatus;
    }

}

let array = [1,2,4,6,8];
const key = 2;
const size = array.length-1;

console.log(search(array, size, key))