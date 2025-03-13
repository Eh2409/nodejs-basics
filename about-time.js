import fs from 'fs'
import ms from 'ms'

readTimeFile()
    .then(res => {
        res.split('\r\n').forEach(time => console.log(ms(+time, { long: true })))
    })
    .catch(error => console.log(error))

function readTimeFile() {
    return new Promise((resolve, reject) => {
        fs.readFile('data/time.txt', 'utf8', (err, content) => {
            if (err) return reject(err)
            resolve(content)
        })
    })
}