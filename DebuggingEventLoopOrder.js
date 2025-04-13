console.log("Begin");

 setTimeout(() => { 
    console.log("TimeoutTask"); 
  }, 0);

  Promise.resolve().then(() => { 
    console.log("Promise Task"); 
  }); 
console.log("End");

 

// explain why the output order follows this specific sequence.

// The output order follows this specific sequence because while execution all the console goes directly to call stack and gets printed but setTimeout and Promise are asynchronous operations and they are sent to webAPI. After the delay they move from webAPI to callback queue in a ascending manner like from delay of 0ms to anything greater in ascending way and gets executed in the same manner too.
// As JS is synchronous language so ti perform asynchronous operations it gets help from browser and these operations are managed by Event Loop.