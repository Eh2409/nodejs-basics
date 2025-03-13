import fs from 'fs'
import ms from 'ms'

readTimeFile()

function readTimeFile() {
    fs.readFile('data/time.txt', 'utf8', (err, content) => {
        if (err) return reject(err)
        content.split('\r\n').forEach(time => console.log(ms(+time, { long: true })))
    })
}