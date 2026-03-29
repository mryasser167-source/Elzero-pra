let prompt1 = prompt("Print Number From – To", "Example: 5-20");
let array = prompt1.split("");
let start = Number(array[0]);
let end = Number(array[2] + array[3]);
let min = Math.min(start, end);
let max = Math.max(start, end);
for (let i = min; i <= max; i++) {
  console.log(i);
}
