const express = require('express')
const app = express()

app.use('/', express.static('public'))

const port = process.env.port || 1337
app.listen(port, ()=>{
  console.log(`devSite is listening on ${port}`)
})
