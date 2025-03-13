import fs from 'fs'

sumFromFile('data/nums.txt')
    .then(sum => console.log('Sum:', sum))
    .catch(err => console.log('Cannot sum:', err))

function sumFromFile(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (err, content) => {
            if (err) return reject(err)
            const sum = content.split('\r\n').reduce((acc, num) => acc + parseInt(num), 0)
            resolve(sum)
        })
    })
}