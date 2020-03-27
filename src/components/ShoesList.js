import React from 'react'
import Shoes from './Shoes'
import Edit from './Edit'

export default function ShoesList(props){

    const mappedshoes = props.shoes.map(elem=>{
        return<div key={elem.id}>
            <Shoes shoes={elem}/>
            <button onClick={ () => props.shoesSold(elem.id)} >Sold</button>
            <Edit id={elem.id} function={props.shoesChange}/>
        </div>
    })

    return <div>
        {mappedshoes}
    </div>
}