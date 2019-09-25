function solution(N, A) {
  var dict = { 0: 0 };
  var ceil = 0;

  for(let i = 0; i < A.length; i++){
    if(A[i] === N+1){
      dict = {};
      dict[0] = ceil;
    }
    else{
      if(!dict.hasOwnProperty(A[i])){
        dict[A[i]] = dict[0] + 1;
        if(dict[A[i]] > ceil) { ceil = dict[A[i]]; }
      }
      else{
        if(dict[A[i]]+1 > ceil) { ceil = dict[A[i]] + 1; }
        dict[A[i]] = dict[A[i]]+1;
      }
    }
  }

  var output = [];
  for(let i = 0; i < N; i++){
    if(dict.hasOwnProperty(i+1)){ output[i] = dict[i+1];}
    else{ output[i] = dict[0]; }
  }

  return output;
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4, 6, 1, 6, 1, 6, 1, 1, 6, 2, 3, 4]));
