import test from 'tape';
import { isAlphanumeric } from '../utils/index.js';

function wrap(text, length) {
  if (length === 0) return '';
  if (!text) return '';
  if (length === undefined) return text;

  let currentWrapped = '';

  for (let letter of text) {
    console.log('here ->', letter);
    if (currentWrapped.length % length === 0) {
      currentWrapped += '\n';
    }

    //if (currentWrapped.length + 1 === length) {
    //  currentWrapped += '-';
    //  currentWrapped += '\n';
    //}

    currentWrapped += letter;
  }

  console.log('Return result is: ', currentWrapped);
  return currentWrapped;
}

// information has to have a secondary semiotic
// technical, beyond interpretable dispute

//function wrap(text, length) {
//  if (length === 0) return '';
//  if (!text) return '';
//  if (length === undefined) return text;

//  let result = '';
//  const words = text.split(' ');

//  for (const word of words) {
//    let row = getLastRow(result);
//    result = appendNextChunk(result, row, word, length);
//  }

//  console.log('Result');
//  console.log(result);
//  return result;
//}

//const insertNewLine = (text) => text + '\n';
//const addWordBreakCharacter = (word) => word + '-';

//function appendNextChunk(existing, row = '', chunk, length) {
//  let mezzo = '';
//  let chunkIndex = 0;
//  let chunkArray = chunk.split('');

//  //  for(let i = mezzo.length; )

//  //  // REPLACE THIS WHILE LOOP HERE>>>>
//  //  while (mezzo.length < length && chunkArray[chunkIndex]) {
//  //    const char = chunkArray[chunkIndex];
//  //    if (char) {
//  //      mezzo += char;
//  //    }
//  //    chunkIndex++;
//  //  }

//  if (chunk.length - 1 > chunkIndex) {
//    const remaining = chunkArray.slice(chunkIndex);
//    console.log('remaining chars', remaining);
//  }

//  row += mezzo;

//  row += ' ';

//  if (row.length + 2 >= length) {
//    row = insertNewLine(mezzo);
//  }

//  console.log({ row });
//  return existing + row;
//}

//function getLastRow(text) {
//  const rows = text.split('\n');
//  return rows[rows.length - 1];
//}

// THE MOST BASIC TESTS - does the `f` return anything useful? Does it work? Is the return type the expected type?
test('Returns a string', (t) => {
  t.plan(4);
  t.equal(
    typeof wrap('This is a string', 1),
    'string',
    `Function returns a string value when called with arguments`
  );
  t.equal(
    wrap(undefined, undefined),
    '',
    `Returns an empty string if text is not passed to function`
  );
  t.equal(
    wrap('Another test case', undefined),
    'Another test case',
    `Returns original string when length is not passed`
  );
  t.equal(
    typeof wrap('Demo line', 0),
    'string',
    `Truncates to empty string when passed length is 0`
  );
});

test('Line wrapping', (t) => {
  const lengthArg = 5;
  const result = wrap('The maximum length of any line here is 5', lengthArg);
  const returnedLength = result.split('\n')[0].length;
  t.plan(1);
  t.assert(
    returnedLength <= lengthArg,
    `Line length does not exceed wrapping length argument. Returned length was |-- ${returnedLength}. Requirement |-- ${lengthArg}`
  );
});

test('How do we trust the result', (t) => {
  // need to prove false that a program might not show all information
  const original = 'Hello, world! I am hungry.';
  const snapshot = `Hello, wo-
  rld! I am 
  hungry.`;
  const wrapped = wrap(original, 10);
  t.plan(1);
  t.assert(
    wrapped.length === snapshot.length,
    `Result formatting matches snapshot: Result|--${wrapped.length} Original|--${snapshot.length}`
  );
});
