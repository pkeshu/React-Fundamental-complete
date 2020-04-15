// function sqaure(x){
//     return x*x;
// }

// console.log(sqaure(3));

// const squareArrow = (x) =>{
//     return x*x;
// }

// console.log(squareArrow(8));

const fullName = "Keshar paudel";

const getFirstName = (fullName) => {
  return fullName.split(" ")[0];
};

const getLastName = (fullName) => fullName.split(" ")[1];

console.log(getFirstName(fullName));
console.log(getLastName(fullName));
