function root(x, n){
  precision = 0.001;
  if(n === 1) { return x; }
  else {
    return narrow(0, x, x, n);
  }
}

function narrow(left, right, x, n) {
  var mid = (left+right)/2;
  var pow = Math.pow(mid, n);
  if(Math.abs(pow - x) <= precision) { return mid.toFixed(3); }
  if(pow > x) {
    return narrow(left, mid, x, n);
  }
  else{
    return narrow(mid, right, x, n);
  }
}

console.log(root(7, 3)) // Should return 3
