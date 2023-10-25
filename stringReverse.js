function StringReverse(value){
    let temp= "";
    let j = value.length-1;
    while(j >= 0)
    {
        temp += value[j]
        j--;

    }
    return temp;
}

console.log(StringReverse("mayank"))