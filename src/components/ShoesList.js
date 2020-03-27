import React from 'react'
import Shoes from './Shoes'
import EditCost from './EditCost'

export default function ShoesList(props){

    const mappedshoes = props.shoes.map(elem=>{
        return<div key={elem.id}>
            <Shoes shoes={elem}/>
        </div>
    })

    return <div>
        {mappedshoes}
    </div>
}