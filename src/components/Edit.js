import React from 'react'
// import Shoes from './Shoes'

export default class Edit extends React.Component{

    constructor(){    
        super()
        this.state = {
            edit: false,
            money: "",
            look:""
      }
      this.changeHandler = this.changeHandler.bind(this)
     }

      

      changeHandler(e){
        this.setState({
          [e.target.name]: e.target.value
        })
      }

  
    render(){
    return <div>
        {this.state.edit? 
        <div>
            <input name = "money" placeholder = "cost" onChange = {this.changeHandler}></input>
            <input name = "look" placeholder = "color" onChange = {this.changeHandler}></input>
            <button onClick = {() => this.props.function(this.props.id, this.state.money, this.state.look)}>Save</button>
            </div> : null}
  <button onClick={() => {this.setState({edit: !this.state.edit})}}>
    Edit
  </button>
  </div>
  }
}