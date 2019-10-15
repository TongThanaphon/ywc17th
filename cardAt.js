const cardAt = n => {
  const symbol = ["C", "D", "H", "S"];
  const number = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "J",
    "Q",
    "K",
    "A"
  ];
  let symbolIndex = Math.floor(n / 13);
  let numberIndex = Math.floor(n % 13);

  return number[numberIndex] + symbol[symbolIndex];
};

console.log(cardAt(34));
