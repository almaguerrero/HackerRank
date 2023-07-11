/*
minmax

numeros.sort(function(a, b) {
return a - b;
});
console.log(numeros)

*/

function minmax(numeros){
  const sorted = numeros.sort();
  let min_sum = 0;
  let max_sum = 0;
  for(let i = 0;i<numeros.length;i++){
    if( i < numeros.length -1 ) {
            min_sum += numeros[i]
        }
        if (i > 0) {
            max_sum +=numeros[i]
        }
  }
  console.log(min_sum,max_sum)
}



minmax([1,3,5,7,9]);
