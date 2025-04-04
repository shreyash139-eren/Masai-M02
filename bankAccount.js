

function createBankAccount(N){
    let balance=N
    function deposit(amount){
        balance+=amount
        return `Deposit of ${amount} successful!`
    }
    function withdraw(amount){
       if(amount<balance){
         balance=balance-amount
        return `Withdrawal of ${amount} successful!`
       }
       else{
        return `Insufficient Fund, available balance:${balance}`
       }
    }
    function getBalance(){
        return `Total balance availabe: ${balance}`
    }
    return{deposit,
        withdraw,
        getBalance
    }
}
let Bank=createBankAccount(1000)
console.log(Bank.deposit(400))
console.log(Bank.withdraw(100))
console.log(Bank.getBalance())
