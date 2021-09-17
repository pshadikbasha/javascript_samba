// console.log("hello _javascript");

// for (var i = 0; i < 5; i++) {}
// console.log("varaibel", i);

// // for (let j = 0; j < 5; j++) {}
// // console.log("the_value", j);

// var j = 0;
// {
//   var j = 5;
// }

// let k = 0;
// {
//   let k = 5;
// }
// console.log(j);
// console.log(k);

// number

let a = 10;
console.log(typeof a);

let b = "shadi";
console.log(typeof b);

let c = true;
console.log(typeof c);

let d;
console.log(d);

let e = null;
console.log(typeof e);

/// arrays

let arr = [1, 2, 3, 3, 4];
arr.forEach((ele, idx) => console.log(ele));

// objects
var obj = {
  a: "shadik",
  b: "basha",
  c: "koushik",
};

console.log("the value is", obj.a);
console.log("the value is", obj.b);
console.log("the value is", obj.c);
for (key in obj) {
  console.log(obj[key]);
}

// functions
// named functions examples
function hello() {
  console.log("hello world");
}
hello();

/// arrow functions
const arrow = () => {
  console.log("hello arrow");
};
arrow();

// rest parameters

function rest(...arg) {
  console.log("the rest paremeter", arg);
}

rest(1, 2, 3, 4, 5, 6);

//iife

(() => {
  console.log("hellofrom iife");
})();

// generators
function* generator() {
  yield 10;
  yield 20;
  yield 30;
}

let gen = generator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

/// array methodss
// forEach
let array_ = [1, 2, 3, 3, 4, 5, 5, 6, 9, 030, "shadik", "basha", "react"];
array_.forEach((ele, index) => {
  console.log(ele);
});

//map
let new_Arr = array_.map((ele) => ele);
console.log(new_Arr);

//filter
let new_filter = array_.filter((ele) => ele < 30);
console.log("the_new_filter", new_filter);

//findindex

let index = array_.findIndex((ele) => ele === "kkod");
console.log("the_index", index);

// find
let find_num = array_.find((ele) => ele === "sadik");
console.log(find_num);

// array reduce
let reduc_arr = [1, 2, 3, 3, 4, , 4];
let reduc = reduc_arr.reduce(
  (previousValue, currentValue) => previousValue + currentValue
);
console.log("the_reduc", reduc);

// shift // unshift

let num = reduc_arr.shift();
console.log(num);
reduc_arr.unshift("basha");
console.log(reduc_arr);

//push or pop

reduc_arr.push("basha_lalst");
console.log(reduc_arr);
// // splice

reduc_arr.splice(1, 1);
console.log(reduc_arr);
reduc_arr.splice(1, 1, "koushik");
console.log(reduc_arr);

// slice

let slic = reduc_arr.slice(1, 5);
console.log(slic);
