// setTimeout(() => console.log("Timeout 1"), 500);
// setTimeout(() => console.log("Timeout 2"), 0);
// console.log("End");

let promise = new Promise((resolve) => {
    resolve("Success!");
  });
  
  promise
    .then((result) => {
      console.log(result);
      return result;
    })
    .then((result) => {
      console.log(result + " Again");
    });
  