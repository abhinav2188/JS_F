const accId = 12345

let accEmail = "abhi@gail.com"
var accPass = "1234" // var should not be used as it is not scope safe.
accCity = "Delhi"

console.table([accId,accEmail,accPass,accCity])

// accId = 12235 // not allowed // value can't be changed
accEmail = "abhi@gmail.om"
accPass = "2545"
accCity = "NewDelhi"

let accState // value is undefined

console.table([accId,accEmail,accPass,accCity,accState])
