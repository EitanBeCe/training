const reverseStrIterative = (str) =>  {
    return str.split('').reverse().join('');
}

console.log(reverseStrIterative("fully"));



const reverseStrRecursive = (str) =>  {
    if(str.length === 1){
        return str;
    }
    
    return reverseStrRecursive(str.slice(1)) + str[0];
}

console.log(reverseStrRecursive("fully"));

