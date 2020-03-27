import React from 'react';
import axios from 'axios';

import './App.css'
import BuyShoes from './components/BuyShoes';
import ShoesList from './components/ShoesList';

class App extends React.Component{

  constructor(){
    super()
    this.state={
      shoes:[],
      newShoes:[]
    }
    this.deleteShoes = this.deleteShoes.bind(this)
    this.addShoes = this.addShoes.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  componentDidMount(){
    axios.get('/api/shoes').then(res => {
      this.setState({
        shoes: res.data
      })
    })
  }

  deleteShoes = (id) =>{
    axios.delete(`/api/deleteshoes/${id}`).then(res=>{
      this.setState({
        shoes: res.data
      })
    })
  }
  
  addShoes(shoestoadd){
    axios.post(`/api/addShoes`, shoestoadd).then(res=>{
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
      <div>
        <ShoesList shoes={this.state.shoes}/>
        <BuyShoes newShoes={this.state.newShoes} changeHandler={this.changeHandler} addShoes={this.addShoes}/>

      </div>
    );
  }
}

export default App;
