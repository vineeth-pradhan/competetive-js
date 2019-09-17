function ClosestToZero(ts){
  var closest;
  if(ts.length) {
    for(let i = 0; i < ts.length; i++){
      if(!closest || (Math.abs(ts[i] < Math.abs(closest)))){ closest = ts[i]; }
      else if(Math.abs(closest) === Math.abs(ts[i])){ closest = Math.abs(closest); }
    }
  }
  if(!closest) { return 0; }
  else { return closest; }
}

console.log(ClosestToZero([]));
