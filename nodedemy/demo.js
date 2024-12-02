import lodash from "lodash";

// console.log(lodash.chunk(["a", "b", "c", "d"], 2));

// console.log(lodash.compact([0, 1, false, 2, "", 3, 4]));

var data = [1, 2, 4];

var data2 = data.reduce((pre, curren) => {
  console.log("pre :", pre);
  console.log("curren :", curren);
  return pre + curren;
});

console.log(data2);
