const getDelimiter = (str) => {
  let i = 3,
    delimiters = "";
  if (str[i - 1] == "[") {
    while (i < str.length) {
      if (str[i] != str[3]) {
        break;
      }
      delimiters += str[i];
      i += 1;
    }
  } else {
    delimiters = str[i - 1];
  }
  return { delLength: i, delimiters };
};

const stringCalculator = (str) => {
  let delimiters = ",";
  if (str.length > 2 && str.slice(0, 2) == "//") {
    const { delLength, delimiters: newDelimeters } = getDelimiter(str);
    delimiters = newDelimeters;
    str = str.slice(delLength);
  }
  str = str.replace(/\n/g, delimiters);
  let integers = str.split(delimiters);
  let alphabates = integers.filter((num) => isNaN(Number(num)));

  let negativeIntegers = integers.filter((num) => num[0] == "-");
  if (alphabates.length > 0) {
    throw new Error(`alphabates are not allowed ${alphabates.join(",")}`);
  }

  if (negativeIntegers.length > 0) {
    throw new Error(
      `negative numbers not allowed ${negativeIntegers.join(",")}`
    );
  }
  return integers.map(Number).reduce((init, item) => {
    if (item < 1001) {
      return init + item;
    }
    return init;
  }, 0);
};

module.exports = stringCalculator;
