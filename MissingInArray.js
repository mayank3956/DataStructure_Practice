let arr=[1,2,4,5 ];

function find(array, n){
let totalSum= Math.floor(((n+1)*(n+2))/2);
for(let i =0; i<n; i++){
    totalSum= totalSum-array[i]
}
return totalSum
}

console.log(find(arr, arr.length))