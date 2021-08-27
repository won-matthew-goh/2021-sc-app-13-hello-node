const express = require('express')
const app = express()
const host = '127.0.0.1'
const port = 3000

app.listen(3000, () => { console.log(`http://${host}:${port}`) })

app.get('/', (req, res) => {
  let { name } = req.query
  res.status(200).send(`<h1>Hello, ${name || 'John Doe'}</h1>`)
})

app.get('/hello', (req, res) => {
  res.status(200).send(`
    <!doctype html>
    <html lang="ko">
    <head>
      <title>Hello, Node</title>
    </head>
    <body>
      <h1>Hello, Node!</h1>
    </body>
    </html>
  `)
})