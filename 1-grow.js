// function grow(x) {
//   let result = x[0];
//   for(let i=1;i<x.length;i++){
//     result*=x[i];
//   }
//   return result;
// }

function grow(x){
  return x.reduce((result, num) => result * num,1);
}
console.log(grow([2,3,2,3,4]));
console.log(grow([2,5,7,11]))
