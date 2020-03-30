import React from 'react'

export default function Shoes(props){
    console.log(props)
    let {id, color, cost, img} = props.shoes
    return <div className="Shoestoshow">
        <img src={img} alt="shoes pics"/>
        {/* <span>{id} {cost} {color}</span> */}
        <span>{id}</span>
        <span>${cost}</span>
        <span>{color}</span>
    </div>
}