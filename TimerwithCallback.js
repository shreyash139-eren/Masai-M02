// Create a function timer that takes a duration in milliseconds and a callback function onComplete. The function should use setTimeout to simulate a countdown, and when the timer ends, it should execute the onComplete callback with a message: "Timer of <duration> ms finished".

// Steps:

// Define timer that accepts duration and onComplete.
// Use setTimeout to delay for duration, then call onComplete with the finish message.
let count=1
function timer(duration,onCOmplete){
    setTimeout(()=>{
        onCOmplete(`Timer of ${duration}ms finished`)
    },duration)
}

timer(2000,(message)=>{
    console.log(message)
})