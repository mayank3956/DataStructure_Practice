let array = [0,2,1,5,3,4]
let array1 = new Array(2 * array.length).fill(0);

for(let i=0; i<array.length; i++){
    array1[i]= array[i]
    array1[i+array.length]=array[i]
}

console.log(array1)