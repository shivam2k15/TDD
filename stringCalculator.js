const stringCalculator = (str) => {
str=str.replace(/\n/g,",");
  return str
    .split(",")
    .map(Number)
    .reduce((init, item) => init + item, 0);
};

module.exports = stringCalculator;
