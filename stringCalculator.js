const stringCalculator = (str) => {
  let delimiters = ",";
  if (str.length > 2 && str.slice(0, 2) == "//") {
    delimiters = str[2];
    str = str.slice(3);
  }
  str = str.replace(/\n/g, delimiters);
  return str
    .split(delimiters)
    .map(Number)
    .reduce((init, item) => init + item, 0);
};

module.exports = stringCalculator;
