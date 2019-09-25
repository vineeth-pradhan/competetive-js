function solution(X, A) {
  var sum = 0, dict = {};
  for(let i = 1; i <= X; i++){ sum += i; }

  for(let i = 0; i < A.length; i++){
    if(!dict.hasOwnProperty(A[i]) && A[i] <= X) {
      dict[A[i]] = '';
      sum -= A[i];
    }

    if(sum === 0) { return i; }
  }

  return -1;
}

console.log(solution(4, [1, 3, 1, 4, 2, 3, 5, 4]));

