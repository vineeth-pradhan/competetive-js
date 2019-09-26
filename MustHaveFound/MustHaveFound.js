function solution(A) {
  var found = {};
  var notFound = { '1': '' };

  for(let i = 0; i < A.length+1; i++){
    if(!found.hasOwnProperty(i+1)) { notFound[i+1] = ''; }
    if(!found.hasOwnProperty(A[i])) { notFound[A[i]] = ''; }
    if(notFound.hasOwnProperty(A[i])) {
      delete notFound[A[i]];
      found[A[i]] = '';
    }
  }

  return Object.keys(notFound)[0];
}

var test = [];
for(let i = 0; i < 999999; i++){
  test.push(i+1);
}

test.splice(100, 1);
// Must list 101;
console.log(solution(test));

