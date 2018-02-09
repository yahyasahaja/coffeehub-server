//MODULES
import React, { Component }  from 'react'
import {Switch, Route} from 'react-router-dom'
import Dropdown from 'react-toolbox/lib/dropdown'
import axios from 'axios'

//STYLES
import styles from './css/products.scss'
import theme from './css/dropdown-tehme.scss'

//COMPONENTS
import PopupBar, {ANIMATE_HORIZONTAL} from '../../components/PopupBar'
import Card from '../../components/Card'

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
export default class Products extends Component {
  componentWillMount() {
    let id = this.props.match.params.product_origin_id
    axios.get('/json/list-product.json').then(res => {
      let products = []
      for (let i in res.data) if (res.data[i].place === id) {
        res.data[i].img = `/img/product/${imgs[Math.floor(Math.random() * imgs.length)]}`
        products.push(res.data[i])
      }
      this.setState({products})
    })
  }

  renderCard() {
    let { products } = this.state
    let id = this.props.match.params.product_origin_id

    if (!products) return
    return products.map((data, i) => {
      return <Card 
        title={data.name} stock={data.stock * 1000} 
        price={Math.floor(Math.random() * 10000 + 15000)} 
        img={data.img} link={`/products/${id}/${data.key}`}
      />
    })
  }

  state = {
    products: null
  }

  render() {
    let {match} = this.props
    return (
      <PopupBar 
        title={match.params.product_origin_id} {...this.props} 
        anim={ANIMATE_HORIZONTAL} 
      >
        {this.renderCard()}
      </PopupBar>
    )
  }
}