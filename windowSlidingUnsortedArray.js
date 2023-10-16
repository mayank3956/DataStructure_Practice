let arr=[15, 2, 4, 8, 9, 5, 10, 23 ];

function subArray(array){
    let n= array.length;
    let start = 0;
    let i;
    let currentSum= arr[0];
    let sum= 23;
    for(i=1; i<=n; i++){
        if(currentSum > sum && start < i-1)
        {
            currentSum = currentSum- arr[start];
            start++;
        }
        if(currentSum == sum)
        {
            console.log("positions are", start ,"and", i-1, currentSum, sum, arr[start], arr[i-1]);
            return 1;
        }
        if(i<n){
            currentSum = currentSum + arr[i];

        }
    }
    return 0;   
}

subArray(arr)