const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter a word: ", (word) => {
  const str = word.toLowerCase();
  let length = str.length;

  for (let i = 0; i < length / 2; i++) {
    if (str[i] !== str[length - 1 - i]) {
      console.log("NO");
      readline.close();
      return;
    }
  }
  console.log("YES");
  readline.close();
});
