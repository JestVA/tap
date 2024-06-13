import test from 'tape';
import { isAlphanumeric } from '../utils/index.js';

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
  const text = 'incongruency transistory magnet file';
  t.plan(2);
  t.assert(
    wrap(text, 8).length >= text.length,
    `Prevent loss of information Returned|--${wrap(text, 8).length} Original|--${text.length}`
  );
  t.assert(
    wrap(text, 2).length >= text.length,
    `Prevent loss of information Returned|--${wrap(text, 2).length} Original|--${text.length}`
  );
});

// information has to have a secondary semiotic
// technical, beyond interpretable dispute

function wrap(text, length) {
  if (length === 0) return '';
  if (!text) return '';
  if (length === undefined) return text;

  let result = '';

  const words = text.split(' ');

  for (const word of words) {
    appendNextChunk(result, word);
  }

  // broken words get converted to dashes

  //return text
  console.log(result);
  return result;
}

function getLineLength(text = '', length) {
  return text.slice(0, length);
}

const getWrapped = (length, remaining) => {
  console.log(remaining);
  return getLineLength(remaining, length);
};

const getRemaining = (existing) => {
  return existing;
};

function appendNextChunk(existing = '', chunk) {}

console.log(wrap('incongruency transistory magnet file', 8));
console.log(wrap('incongruency transistory magnet file', 15));
