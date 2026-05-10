// let data = [1, 1, 1, 2, 3];
// let newdata = new Set(data); /// مش هتكرر الرقم1
// newdata.add(4); // هيضيف اربعه
// ///
// // newdata.delete(3);// هيمسح فقط
// console.log(newdata.delete(3)); // trueلو الرقم موجود هيديني
// ///
// console.log(newdata.has(4)); // هل الرقم اربعه موجود؟
// ///
// // newdata.clear(); // بيوقف العمليه
// console.log(data);
// console.log(newdata);
/// leacture1///
//////////////////////////////////////////////////////////////////////
///Set vs WeakSet
let array = [1, 1, 1, 2, 3, 4, "A", "A"];
let set = new Set(array);
console.log(set);
///Type Size
console.log(`My Set Number is: ${set.size}`);
///Values + Key Alias
let itrator = set.keys();
console.log(itrator);
console.log(itrator.next().value);
console.log(itrator.next().value);
console.log(itrator.next().value);

///
console.log(`/////////////////`);
///

///For eash
set.forEach((ele) => console.log(ele));
//
// Type Of Data weak set

let myws = new WeakSet([{ A: 1, B: 2 }]); // object لازم

console.log(myws);
/*
 
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  
*/
/// leacture 2///
///
