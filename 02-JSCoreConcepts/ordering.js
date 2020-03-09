const reverse = function(arr) {
    arrReversed = [];
    arr.forEach(item => arrReversed.push(item));
    arrReversed.reverse();
    return arrReversed;
}

const sort = function(arr) {
    arr.sort()
    return arr;
}

const even = function(arr) {
    let array = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
      array.push(arr[i]);
    }
  }
  return array;
}

numbers = [8,3,2,1,5,4,6];
console.log(numbers);
console.log(reverse(numbers));
console.log(even(numbers));
console.log(reverse(even(numbers)));
console.log(even(sort(numbers)));
