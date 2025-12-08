let farm = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 0, 1],
];

function plantTree(arr) {
  if (arr.length === 0) return 0; // คิดไม่ออกครับว่าจะคืนเป็นอะไรดี
  let maxZero = -1;
  let RowIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    let countZero = arr[i].filter((e) => e === 0).length;
    console.log(`zero in row :${countZero} last zero :${maxZero} index : ${i} `);
    if (countZero > maxZero) {
      maxZero = countZero;
      RowIndex = i;
    }
  }
  if (maxZero !== -1) {
    let col = arr[RowIndex].indexOf(0);
    if (col !== -1) {
      arr[RowIndex][col] = 1;
      console.log(`change made in row:${RowIndex} col:${col}`);
    }
  }
  return arr;
}
console.log(plantTree(farm));

let nums = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9];

function checkUnique(arr) {
  let nums = new Set();

  for (let num of arr) {
    if (nums.has(num)) {
      return num;
    }
    nums.add(num);
  }
  return -1;
}

console.log(checkUnique(nums));
