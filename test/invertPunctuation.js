function fixInvertedPunctuation(textToPunctuate) {
    var symbols = {
        invertedQuestionMark: '¿',
        invertedExclamationMark: '¡'
    };
    var sentences = textToPunctuate
        .split(/([?!.])/)
        .reduce(function (acc, part, index, array) {
        if (index % 2 === 0) {
            acc.push(part + (array[index + 1] || ''));
        }
        return acc;
    }, []);
    for (var i = 0; i < sentences.length; i++) {
        var sentence = sentences[i].trim();
        if (sentence.endsWith('?') &&
            !sentence.startsWith(symbols.invertedQuestionMark)) {
            sentences[i] = symbols.invertedQuestionMark + sentence;
        }
        else if (sentence.endsWith('!') &&
            !sentence.startsWith(symbols.invertedExclamationMark)) {
            sentences[i] = symbols.invertedExclamationMark + sentence;
        }
    }
    return sentences.filter(Boolean).join(' ');
}
console.log(fixInvertedPunctuation('Ella ya se graduo de la universidad? ¡no!'));
console.log(fixInvertedPunctuation('Feliz cumpleanos! Ella ya se graduo de la universidad?'));
