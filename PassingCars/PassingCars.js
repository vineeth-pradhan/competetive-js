function solution(A) {
  var lead = A[0];
  var prefix = 0;
  var nos = 0;

  for(let i = 0; i < A.length; i++){
    if(nos > 1000000000) { return -1; }
    if(A[i] != lead){ nos = prefix + nos; }
    else{ prefix = prefix+1; }
  }

  return nos;
}

console.log(solution([0, 1, 0, 1, 1]));
