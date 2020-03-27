import React from 'react'

export default function Shoes(props){
    console.log(props)
    let {id, color, cost, img} = props.shoes
    return <div>
        <span>{id}</span>
        <span>{color}</span>
        <span>{cost}</span>
        <span>{img}</span>

    </div>
}