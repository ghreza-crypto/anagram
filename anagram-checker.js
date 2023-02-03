module.exports = function (str, str2) {
  let wordOneReplaced = str.replace(/[^\w]/g).toLowerCase();
  let wordTwoReplaced = str2.replace(/[^\w]/g).toLowerCase();
  let stringOne = wordOneReplaced.split("").sort().join("");
  let stringTwo = wordTwoReplaced.split("").sort().join("");
  if (stringOne === stringTwo) {
    return true;
  } else {
    return false;
  }
}