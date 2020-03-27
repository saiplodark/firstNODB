import React from 'react'

export default function Shoes(props){
    console.log(props)
    let {id, color, cost, img} = props.shoes
    return <div className="Shoestoshow">
        <span>{id}</span>
        <span>{color}</span>
        <span>{cost}</span>
        <img src={img} alt="shoes pics"/>

    </div>
}