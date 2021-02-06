const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => {
                resolve('Do something Async')
            }, 3000)
            : reject(new Error('Test error'))
    })
}

const doSomething = async () => {
    const something = await doSomethingAsync()
    console.log(something)
}

console.log('Before')
doSomething()
console.log('After')

const anotherFunction = async () => {
    try {
        await doSomething();
    } catch (err) {
        console.error(err)
    }
}

console.log('Before')
anotherFunction()
console.log('After')