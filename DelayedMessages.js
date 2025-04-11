function message1(){
    console.log("Message 1")
}

function message2(){
    setTimeout(()=>{
        console.log("Message 2")
    },2000)
}

function message3(){
    console.log("Message 3")
}

message1()
message2()
message3()