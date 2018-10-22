import React, {Component} from 'react'
import {shirt} from './resources/items'
import Header from './Header/Header'
import Category from './Category/Category'
import ItemDetail from './ItemDetail/ItemDetail'
import Recommand from './Recommand/Recommand'



class App extends Component {
  render () {
    return (
    <div>
      <Header />
      <Category />
      <ItemDetail />
      <Recommand />
    </div>
    )
  }
}

export default App
