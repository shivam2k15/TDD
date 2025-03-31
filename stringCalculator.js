const stringCalculator = (str) => {
  let delimiters = ",";
  if (str.length > 2 && str.slice(0, 2) == "//") {
    delimiters = str[2];
    str = str.slice(3);
  }
  str = str.replace(/\n/g, delimiters);
  let integers = str.split(delimiters);
  let negativeIntegers = integers.filter((num) => num[0] == "-");
  if (negativeIntegers.length > 0) {
    throw new Error(
      `negative numbers not allowed ${negativeIntegers.join(",")}`
    );
  }
  return integers.map(Number).reduce((init, item) => init + item, 0);
};

module.exports = stringCalculator;
