
const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send({
      message: 'CCP demo app is working!',
      version: '20210821.1',
      branch: 'main',
      env: process.env.env_demo || 'this variables was not loaded'
  })
})

app.listen(port, () => {
  console.log(`CCP demo app listening at http://0.0.0.0:${port}`)
})
