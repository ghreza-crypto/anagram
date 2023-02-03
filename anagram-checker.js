module.exports = function (str,str2) {
  let str=str.replace(/[^\w]/g).toLowerCase();
  let str2=str2.replace(/[^\w]/g).toLowerCase();
   str=str.split("").sort().join("");
   str2=str2.split("").sort().join("");
  if(str===str2){
    return true;
  }else{
    return false;
  }
}
