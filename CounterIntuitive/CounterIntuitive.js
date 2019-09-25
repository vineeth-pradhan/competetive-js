function solution(N, A) {
  var dict = { 0: 0 };
  var ceil = 0;

  console.log("===========================")

  for(let i = 0; i < A.length; i++){
    console.log("Before -----------------")
    console.log("i: "+i)
    console.log("A[i]: "+A[i])
    process.stdout.write("dict: { ")
    for(let key in dict){ process.stdout.write(key+": "+dict[key]+" ") }
    process.stdout.write(" }\n")
    console.log("ceil: "+ceil)





    if(A[i] === N+1){
      dict = {};
      dict[0] = ceil;
    }
    else{
      if(!dict.hasOwnProperty(A[i])){ dict[A[i]] = ceil+1; }
      else{
        if(dict[A[i]]+1 > ceil) { ceil = dict[A[i]] + 1; }
        dict[A[i]] = dict[A[i]]+1;
      }
    }




    console.log("After -----------------")
    console.log("i: "+i)
    console.log("A[i]: "+A[i])
    process.stdout.write("dict: { ")
    for(let key in dict){ process.stdout.write(key+": "+dict[key]+" ") }
    process.stdout.write(" }\n")
    console.log("ceil: "+ceil)
    console.log("END -----------------\n\n\n\n\n\n")
  }

  var output = [];
  for(let i = 0; i < N; i++){
    if(dict.hasOwnProperty(i+1)){ output[i] = dict[i+1];}
    else{ output[i] = dict[0]; }
  }

  console.log("===========================")
  return output;
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
