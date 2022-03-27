const { caluculateTip, fahrenheitToCelusius, celusiusToFahrenheit, add } = require(('../src/math'))

test('Should caluculate total with tip', () => {
    const total = caluculateTip(10)
    // if (total !== 13) {
    //     throw new Error('e')
    // }
    expect(total).toBe(12)
})

test('Should get fahrenheit from celusius', () => {
    const celusius = fahrenheitToCelusius(50)
    expect(celusius).toBe(10)
})

test('Should get celusius from fahrenheit', () => {
    const fahrenheit = celusiusToFahrenheit(10)
    expect(fahrenheit).toBe(50)
})

test('Async test demo', (done) => {
    setTimeout(() => {  
        expect(1).toBe(1)
        done()
    }, 2000)
})

test('Should add two numbers', (done) => {
    add(1, 3).then((sum) => {
        expect(sum).toBe(4)
        done()
    })
})

test('Should add two numbers async/await', async () => {
    const sum = await add(1, 3)
    expect(sum).toBe(4)
})