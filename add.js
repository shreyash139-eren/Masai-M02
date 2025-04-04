function add(a,b){
    return a+b
}
export{add}

export default function evenSum(N){
    let sum=0
for(let i=1;i<=N;i++){
    if(i%2===0){
        sum+=i
    }
}
return sum
}