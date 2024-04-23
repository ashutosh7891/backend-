const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  
})


app.get('/twitter', (req,res) => {
    res.send('twitter page is option')
})

app.get('/login', (req,res) => {
    res.send('login page is option')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})