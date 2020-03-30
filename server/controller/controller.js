const shoes = require ('../../db.json')

module.exports={
    getShoes: (req, res, next) =>{
        res.status(200).send(shoes)
    },
    addShoes: (req, res, next) =>{
        let {id, color, cost, img} = req.body
        const newShoes = {
            id,
            color,
            cost,
            img
        }
        shoes.push(newShoes)
        res.status(200).send(shoes)
    },
    updateShoes: (req, res, next) => {
        const index = shoes.findIndex((elem)=>{
            return elem.id == req.params.id
        })
        shoes[index].cost = req.body.cost
        shoes[index].color = req.body.color
        shoes[index].img = req.body.img
        res.status(200).send(shoes)
    },
    deleteShoes: (req, res, next)=>{
        const index = shoes.findIndex((elem)=>{
            return elem.id == req.params.id
        })
        shoes.splice(index, 1)
        res.status(200).send(shoes)
    }
}