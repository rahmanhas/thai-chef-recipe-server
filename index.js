const express = require('express')
const app = express()
const port = 5000;

const chefInfo = require('./data/chefinfo.json')
const cors = require('cors')
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/chefinfo', (req, res) => {
  res.send(chefInfo)
})
app.get('/categories', (req, res) => {
  res.send(categories)
})
app.get('/chefinfo/:id', (req, res) => {
  const id = req.params.id;
  if (id == 0) {
    // res.send(chefInfo)
  }
  else {
    const individualChef = chefInfo.filter(chef => chef.id == id);
    res.send(individualChef);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})