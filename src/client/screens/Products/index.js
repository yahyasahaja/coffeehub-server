//MODULES
import React, { Component }  from 'react'
import {Switch, Route} from 'react-router-dom'
import Dropdown from 'react-toolbox/lib/dropdown'
import axios from 'axios'

//STYLES
import theme from './css/dropdown-tehme.scss'

//COMPONENTS
import PopupBar, {ANIMATE_HORIZONTAL} from '../../components/PopupBar'
import Card from '../../components/Card'
import Products from './Products'
import Details from './Details'

//STORE
import store from '../../services/store'
import * as actions from '../../services/actions'
 
//CONFIG
import {END_POINT_URL} from '../../config'

const categories = [ 
  { value: 'all', label: 'Semua Cateogry'},
]

const filters = [
  { value: 'termurah', label: 'Termurah'},
  { value: 'termahal', label: 'Termahal'},
  { value: 'terlama', label: 'Terlama'},
  { value: 'terbaru', label: 'Terbaru'},
]

const imgs = ['aceh-gayo.jpg', 'karlos.jpg', 'kopi-sidomukti.jpg']

//COMPONENT
export default class ProductsRouter extends Component {
  componentWillMount() {
    store.dispatch(actions.showPopup())
  }

  componentWillUnmount() {
    store.dispatch(actions.hidePopup())
  }

  render() {
    let {match} = this.props
    return (
      <Switch>
        <Route path="/products/:product_origin_id/:product_id" exact component={Details} />
        <Route path="/products/:product_origin_id" exact component={Products} />
      </Switch>
    )
  }
}