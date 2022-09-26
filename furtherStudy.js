'use strict';

function wordsInCommon(words1, words2) {
  const wordSet1 = new Set(words2);
  const wordSet2 = new Set(words2);

  const result = new Set();

  for (const word of wordSet1) {

    if (wordSet2.has(word)) {
      result.add(word);
    }
  }
  return Array.from(result);

}
0
function kidsGame(names) {
  const output = [names.shift()];

  const firstLetter = {};

  for (const name of names) {
    const firstChar = name[0];
    if (!firstLetter[firstChar]) {
      firstLetter[firstChar] = [name];
    }
    else {
      firstLetter[firstChar].push(name);
    }
  }
  while (true) {
    const lastWord = output[output.length - 1];
    const lastWordChar = lastWord[lastWord.length - 1];

    if (firstLetter[lastWordChar] === undefined ||
      firstLetter[lastWordChar].length === 0) {
      break;
    }
    const nextWord = firstLetter[lastWordChar].shift();
    output.push(nextWord);
  }
  return output;


}
