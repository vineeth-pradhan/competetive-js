function solution(A){
  var dict = {};
  var pairs = [];

  for(let i = 0; i < A.length; i++) {
    if(dict.hasOwnProperty(A[i])) {
      if(A[i] )
    }
    else { dict[A[i]] = ''; }
    j = i + 1;
    if(A[i] > A[j]) {
      pairs.push([A[i], A[j]]);
    }
  }

  return pairs;
}

console.log(solution([9, 15, 4, 2, 4, 5, 10, 1, 3, 6, 9]))
// [[15, 4], [4, 2], [10, 1]]
