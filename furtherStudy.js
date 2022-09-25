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

function kidsGame(names) {
  // Replace this with your code
}
