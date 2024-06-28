function isAnagram(str1 , str2){
    const cleanStr1 = str1.replace(/[^\w]/g,'').toLowerCase();
    const cleanStr2 = str2.replace(/[^\w]/g,'').toLowerCase();

    if(cleanStr1.length!=cleanStr2.length){
        return false;
    }

    let newStr1=cleanStr1.split('').sort().join('');
    let newStr2=cleanStr2.split('').sort().join('');
 
    return newStr1==newStr2;

}

console.log(isAnagram('listen','silent'));
console.log(isAnagram('hello','world'));
