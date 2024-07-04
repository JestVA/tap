function fixInvertedPunctuation(textToPunctuate: string): string {
  const symbols = {
    invertedQuestionMark: '¿',
    invertedExclamationMark: '¡'
  };

  const sentences = textToPunctuate
    .split(/([?!.])/)
    .reduce((acc, part, index, array) => {
      if (index % 2 === 0) {
        acc.push(part + (array[index + 1] || ''));
      }
      return acc;
    }, [] as string[]);

  for (let i = 0; i < sentences.length; i++) {
    const sentence = sentences[i].trim();
    if (
      sentence.endsWith('?') &&
      !sentence.startsWith(symbols.invertedQuestionMark)
    ) {
      sentences[i] = symbols.invertedQuestionMark + sentence;
    } else if (
      sentence.endsWith('!') &&
      !sentence.startsWith(symbols.invertedExclamationMark)
    ) {
      sentences[i] = symbols.invertedExclamationMark + sentence;
    }
  }

  return sentences.filter(Boolean).join(' ');
}

console.log(
  fixInvertedPunctuation('Ella ya se graduo de la universidad? ¡no!')
);
console.log(
  fixInvertedPunctuation(
    'Feliz cumpleanos! Ella ya se graduo de la universidad?'
  )
);
