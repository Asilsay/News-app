function longest(word: string) {
  const words = word.split(' ');
  let longest = '';
  words.forEach((word) => {
    if (word.length > longest.length) {
      longest = word;
    }
  });

  const result = longest + ': ' + longest.length + ' char';
  return result;
}

console.log(longest('Saya sangat senang mengerjakan soal algoritma'));
