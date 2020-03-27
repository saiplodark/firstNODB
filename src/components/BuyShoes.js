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

    //   changeHandler(e){
    //     this.setState({
    //       color: e.target.value
    //     })
    //   }

    render(){
        return(
            <div>
            <p>id</p>
            <input
            type ="text"
            name = "id"
            value = {this.state.id}
            onChange = {(e)=> this.changeHandler(e)}
            placeholder = "Add new item..."
            />
            <p>color</p>
            <input
            type ="text"
            name = "color"
            value = {this.state.color}
            onChange = {(e)=> this.changeHandler(e)}
            placeholder = "Add new item..."
            />
            <p>cost</p>
            <input
            type ="text"
            name = "cost"
            value = {this.state.cost}
            onChange = {(e)=> this.changeHandler(e)}
            placeholder = "Add new item..."
            />
            <p>img</p>
            <input
            type ="text"
            name = "img"
            value = {this.state.img}
            onChange = {(e)=> this.changeHandler(e)}
            placeholder = "Add new item..."
            />
            <button onClick={() => this.props.addShoes(this.state)}>Add Shoes</button>
        </div>
        )
    }
}