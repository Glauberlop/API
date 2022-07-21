const express = require ('express');
const mongoose = require ('mongoose');
const app = express();

const Person = require('./models/Person')


app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.post('/person', async (req, res) => {
  const {id, name, salary, approved} = req.body

  const person = {
    id,
    name,
    salary,
    approved,
  }

  try{
    await Person.create(person)
    res.status(201).json({message: 'Pessoa inserida no sistema com sucesso!'})

  } catch(error) {
    res.status(500).json({error: error})
  }

})


app.get('/' , (req, res) =>{
  res.json({message: 'Olá!'})

})

mongoose
  .connect(
    'mongodb+srv://Glauber:9xFPzAzLbTj1DEJm@apicluster.uwyja.mongodb.net/bancodaapi?retryWrites=true&w=majority'
  )
  .then(()=>{
    console.log('Conectado!')
    app.listen(3000)
  })
  .catch((err) => console.log(err))




//


