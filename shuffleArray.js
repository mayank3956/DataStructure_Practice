function Shuffle(arr){
    let newArr =[]
    let targetNumber = arr.length/2
    console.log(targetNumber);
    for(let i =0; i<arr.length/2; i++)
    {
        newArr.push(arr[i])
        newArr.push(arr[i+targetNumber])
    }
    return newArr;
}

console.log(Shuffle([1,2,3,4,4,3,2,1]));