const express = require ('express');
const mongoose = require ('mongoose');
const app = express();
require ('dotenv').config()

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)

app.get('/' , (req, res) =>{
  res.json({message: 'Olá!'})

})
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.uwyja.mongodb.net/bancodaapi?retryWrites=true&w=majority`
  )
  .then(()=>{
    console.log('Conectado!')
    app.listen(3000)
  })
  .catch((err) => console.log(err))
