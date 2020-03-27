import React from 'react'

export default class BuyShoes extends React.Component{

    constructor(){
        super()
        this.state={
            id:"",
            color:"",
            cost:"",
            img:""
        }
    }

    changeHandler(e){
        this.setState({
          [e.target.name]: e.target.value
        })
      }



    render(){
        return(
            <div>
            <p>model</p>
            <input
            type ="text"
            name = "id"
            value = {this.state.id}
            onChange = {(e)=> this.changeHandler(e)}
            placeholder = "New Kicks"
            />
            <p>color</p>
            <input
            type ="text"
            name = "color"
            value = {this.state.color}
            onChange = {(e)=> this.changeHandler(e)}
            placeholder = "Color"
            />
            <p>cost</p>
            <input
            type ="text"
            name = "cost"
            value = {this.state.cost}
            onChange = {(e)=> this.changeHandler(e)}
            placeholder = "How much you spend?"
            />
            <p>img</p>
            <input
            type ="text"
            name = "img"
            value = {this.state.img}
            onChange = {(e)=> this.changeHandler(e)}
            placeholder = ""
            />
            <button onClick={() => this.props.shoesBuy(this.state)}>Add Shoes</button>
        </div>
        )
    }
}