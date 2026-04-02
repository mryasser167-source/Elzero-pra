let myfirend = [
  {
    title: "OSAMA",
    age: 39,
    available1: true,
    skill: ["html", "css", "js"],
    address: { egypt: "cairo" },
  },
  {
    title: "Ahmed",
    age: 25,
    available1: false,
    skill: ["Python", "Django"],
    address: { ksa: "maka" },
  },
  {
    title: "yasser",
    age: 21,
    available1: true,
    skill: ["eng", "formater", "graphic"],
    address: { america: "newyork" },
  },
];
///creat function
function ya(chosen) {
  if (chosen === 1) {
    [a, ,] = myfirend;
    ({
      title,
      age,
      available1,
      skill: [, cs],
      address: { egypt: eg },
    } = a);
    console.log(`my name is${title}`);
    console.log(`my age is${age}`);
    available1 === true ? console.log(`avaliable`) : console.log(`not`);
    console.log(`my skill is ${cs}`);
    console.log(`my country is ${eg}`);
  }

  //2

  if (chosen === 2) {
    [, b] = myfirend;
    ({
      title,
      age,
      available1,
      skill: [, d],
      address: { ksa },
    } = b);
    console.log(`my name is${title}`);
    console.log(`my age is${age}`);
    available1 === true
      ? console.log(`avaliable`)
      : console.log(`Not avaliable`);
    console.log(`my skill is ${d}`);
    console.log(`my country is ${ksa}`);
  }
  //3
  if (chosen === 3) {
    [, , c] = myfirend;
    ({
      title,
      age,
      available1,
      skill: [, f],
      address: { america: am },
    } = c);
    console.log(`my name is ${title}`);
    console.log(`my age is ${age}`);
    available1 === true
      ? console.log(`avaliable`)
      : console.log(`Not avaliable`);
    console.log(`my skill is ${f}`);
    console.log(`my country is ${am}`);
  }
}
ya(3);
