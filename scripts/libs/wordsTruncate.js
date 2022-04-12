export default function wordsTruncate(text, totalWords) {
  const trimText = text.trim();
  const splitTextWord = trimText.split(' ');
  const textWordsLength = splitTextWord.length;

  if (textWordsLength <= totalWords) return trimText;

  return splitTextWord
    .slice(0, totalWords)
    .map((word, wordIdx, wordsArr) => {
      const lastIdxWord = wordsArr.length - 1;

      if (wordIdx === lastIdxWord) {
        return `${word} ...`;
      } else {
        return word;
      }
    })
    .join(' ');
}
