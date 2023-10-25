function Check(arr){
    let newArr = []
    let i = 0
    while(i<arr.length){
        if(i === 0)
        {
            newArr.push(arr[i]);
        }
        else{

            newArr.push(arr[i]+newArr[i-1]);
        }
        i++;
    }
    return newArr;
}

console.log(Check([1,2,3,4]))