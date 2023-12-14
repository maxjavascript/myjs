const makeItFunny = (str, n) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if ((i + 1) % n === 0) {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}
console.log(makeItFunny('russ iaisfl owers', 2));
