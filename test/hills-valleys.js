import test from "tape";

const a1 = [1, 2, 1];
const a2 = [1, 0, 1];
const a3 = [7, 6, 5, 5, 4, 1];
const a4 = [3, 4, 1, 1, 6, 5];

const hills = (arr = []) => {
  let previous = arr[0];
  let count = 0;
  arr.forEach((h, i, a) => {
    if (i === 0) {
      return;
    }
    if (h > previous && h > a[i + 1]) {
      count++;
    }
    previous = h;
  });
  return count;
};

const valleys = (arr) => {
  let previous = arr[0];
  let count = 0;
  arr.forEach((h, i, a) => {
    if (i === 0) {
      return;
    }
    if (h <= previous && h < a[i + 1]) {
      count++;
    }
    previous = h;
  });
  return count;
};

test("Hills and valleys", (t) => {
  const testHills = () => {
    t.equal(hills(a1), 1);
    t.equal(hills(a2), 0);
    t.equal(hills(a3), 0);
    t.equal(hills(a4), 2);
  };

  const testValleys = () => {
    t.equal(valleys(a1), 0);
    t.equal(valleys(a2), 1);
    t.equal(valleys(a3), 0);
    t.equal(valleys(a4), 1);
  };

  t.plan(8);
  testHills();
  testValleys();
});
