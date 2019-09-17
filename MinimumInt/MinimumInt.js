function solution(A) {
    var tally = [];
    for(let i = 0; i <= A.length; i++){
        tally[A[i]] = null;
    }

    for(let i = 0; i < A.length; i++){
      // console.log(A[i])
        tally[A[i]] = true;
    }

    for(let i = 1; i < tally.length; i++){
      if(!tally[i]){
        return i;
      }
    }
  if(tally.length == 0) { return 1; }
  else { return tally.length; }
}

console.log(solution([1, 2, 3, 44]));
