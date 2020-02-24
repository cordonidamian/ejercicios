duplicatedEleArray = elemArray => {
  const count = {};
  const uniqueCount = [];

  elemArray.forEach(ele => {
    count[ele] = (count[ele] || 0) + 1;
  });

  Object.keys(count).forEach(key => {
    let number = count[key];
    uniqueCount.push(number);
  });

  uniqueCount.sort((a, b) => {
    return b - a;
  });

  const maxNumber = uniqueCount[0];

  const OrderCount = Object.keys(count).filter(key => {
    return count[key] === maxNumber;
  });

  return OrderCount;
};

let elemArray = [
  "5",
  "5",
  "5",
  "5",
  "7",
  "8",
  "8",
  "9",
  "9",
  "10",
  "4",
  "4",
  "4",
  "4",
  "4",
  "4",
  "5",
  "5"
];

let elemArray2 = [
  "a",
  "a",
  "a",
  "a",
  "b",
  "c",
  "f",
  "f",
  "g",
  "g",
  "v",
  "v",
  "v",
  "v",
  "v",
  "v",
  "a",
  "a"
];

console.log(
  "Los Elementos que mas Se Repiten Son:",
  this.duplicatedEleArray(elemArray)
);

console.log(
  "Los Elementos que mas Se Repiten Son:",
  this.duplicatedEleArray(elemArray2)
);
