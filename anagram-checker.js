module.exports = function (str, str2) {
  let wordOneReplaced = str.replace(',', '').toLowerCase();
  let wordTwoReplaced = str2.replace(',', '').toLowerCase();
  let stringOne = wordOneReplaced.split("").sort().join("").trim();
  let stringTwo = wordTwoReplaced.split("").sort().join("").trim();
  if (stringOne === stringTwo) {
    return true;
  } else {
    return false;
  }
}