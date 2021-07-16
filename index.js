
const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send({
      message: 'CCP demo app is working!',
      version: '20210510.1'
  })
})

app.listen(port, () => {
  console.log(`CCP demo app listening at http://0.0.0.0:${port}`)
})
