import React from 'react';
import axios from 'axios';

import './App.css'
import BuyShoes from './components/BuyShoes';
import ShoesList from './components/ShoesList';
// import TotalCost from './components/TotalCost'


class App extends React.Component{

  constructor(){
    super()
    this.state={
      shoes:[],
      newShoes:[]
    }
    this.shoesSold = this.shoesSold.bind(this)
    this.shoesChange = this.shoesChange.bind(this)
    this.shoesBuy = this.shoesBuy.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  componentDidMount(){
    axios.get('/api/shoes').then(res => {
      this.setState({
        shoes: res.data
      })
    })
  }

  shoesSold = (id) =>{
    axios.delete(`/api/deleteshoes/${id}`).then(res=>{
      this.setState({
        shoes: res.data
      })
    })
  }

  shoesChange = (id,cost,color ) => {
    axios.put(`/api/updateshoes/${id}`,{cost, color}).then(res=>{
      this.setState({
        shoes: res.data
      })
    })
  }
  
  shoesBuy(shoestoadd){
    axios.post(`/api/addshoes`, shoestoadd).then(res=>{
      this.setState({
        shoes: res.data,
      })
    })
  }
  
  changeHandler(e){
    this.setState({
      newShoes: e.target.value
    })
  }

  render(){
    return(
      <div className = "Page">
        <h1>Cory's Kicks</h1>
        <ShoesList shoes={this.state.shoes} shoesSold={this.shoesSold} shoesChange={this.shoesChange}/>
        <BuyShoes newShoes={this.state.newShoes} changeHandler={this.changeHandler} shoesBuy={this.shoesBuy}/>
        
      </div>
    );
  }
}

export default App;
