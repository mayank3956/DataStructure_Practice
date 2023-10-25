
function checkPalindroine(str , i, j){
    console.log(str , i, j);

    if(i>j){
        return true;
    }
    if(str[i] !== str[j]){
        return false;
    }
    else{
        return checkPalindroine(str, i+1, j-1);
    }
}

const  value = "abba"
if(checkPalindroine(value, 0, value.length-1))
{

    console.log("String is Palindrone")
}