
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send({
      message: 'CCP demo app is working!',
      version: '20210427.1'
  })
})

app.listen(port, () => {
  console.log(`CCP demo app listening at http://localhost:${port}`)
})
