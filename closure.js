function outerFunction(){
    let message="Hello"
    
    function inner(){
      return message;
    }
    return inner()
  }
  let test=outerFunction()
  console.log(test)
  console.log(test)
  