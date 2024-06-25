var str1 = "Hello";
var str2 = "hello";

const varstr1 = str1.toLowerCase;
const varstr2 = str2.toLowerCase;

function comparestr(){
    if(varstr1 === varstr2){
        return "The two strings are equal";
    }
    else{
        return "The two strings are not equal";
    }
}
console.log(comparestr());
