const accountId= 143
let accountEmail="shaurya@gmail.com"
var accountPassword="Shreya"
accountCity= "Kanpur"

accountCity="Lucknow"
//accountId=2    Not allowed  i.e const cannot be changed

console.log(accountId)

/*Prefer not to use var 
because of issue in block scope and functional scope*/
console.table([accountId,accountEmail,accountPassword,accountCity])
console.log(accountCity)