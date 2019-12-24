const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/now', (req, res) => res.send(`${Date. now()}`))

app.get('/now-nocache', (req, res) => {
  res.append('Cache-control', 'private, max-age=0, no-cache')
  res.send(`${Date. now()}`)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
