// const caluculateTip = (total, tipPercent) => {
//     const tip = total * tipPercent
//     return total + tip
// }

const caluculateTip = (total, tipPercent = .2) => total + total * tipPercent

const fahrenheitToCelusius = (temp) => (temp - 32) / 1.8

const celusiusToFahrenheit = (temp) => (temp * 1.8) + 32

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Numbers must be non-negative')
            }
            resolve(a + b)
        }, 2000)
    })
}

module.exports = {
    caluculateTip,
    fahrenheitToCelusius,
    celusiusToFahrenheit,
    add
}