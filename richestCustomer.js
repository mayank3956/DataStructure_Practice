const accounts = [[1,2,3, 100],[3,2,1,-3]]

function Sum(arr){
    let sum = 0
    for(let i =0; i<arr.length; i++){
sum = sum + arr[i]
    }
    return sum
}

function CheckRichest(accounts){
    let richestWealth = 0 ;

    for (let index = 0; index < accounts.length; index++) {
        const element = Sum(accounts[index]);
        if(element > richestWealth){
            richestWealth = element
        }
        
    }
    return richestWealth;
}

console.log(CheckRichest(accounts));