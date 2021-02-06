function sum(n1, n2) {
    return n1 + n2
}

function calculate(n1, n2, callback) {
    return callback(n1, n2)
}

console.log(calculate(2, 2, sum))

function date(callback) {
    console.log(new Date)
    setTimeout(function () {
        callback(new Date())
    }, 3000)
}

function printDate(dateNow) {
    console.log(dateNow)
}

date(printDate)