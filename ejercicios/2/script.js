sumaArray = elemArray => {
  return elemArray.reduce((a, b) => a + b);
};

let elemArray = [];

let limiteArray = 10;

for (let i = 0; i < limiteArray; i++) {
  elemArray.push(i);
}

console.log(this.sumaArray(elemArray));
