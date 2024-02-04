function curry(a){
  
  return function(b){
   console.log(a + b);
  }
  
}

curry(1)(2)