module.exports = function (str, str2) {
 
    let n1 = str.length;
    let n2 = str2.length;

    if (n1 != n2)
        return false;
  
    str.sort();
    str2.sort()
   
    for (let i = 0; i < n1; i++)
        if (str[i] != str2[i])
            return false;
   
    return true;
}