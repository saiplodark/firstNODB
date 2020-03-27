const express = require ('express');

const{getShoes, addShoes, updateShoes, deleteShoes} = require ('./controller/controller')

const app = express()

app.use(express.json());

app.get('/api/shoes', getShoes)

app.post('/api/addshoes', addShoes)

app.put('/api/updateshoes/:id', updateShoes)

app.delete('/api/deleteshoes/:id', deleteShoes)

const port = 1234;

app.listen(port, ()=> {console.log(`listening on port ${port}`)})