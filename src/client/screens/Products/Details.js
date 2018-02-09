//MODULES
import React, { Component }  from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import Dropdown from 'react-toolbox/lib/dropdown'
import axios from 'axios'
import Slider from 'react-toolbox/lib/slider'

//STYLES
import styles from './css/details.scss'
import theme from './css/dropdown-tehme.scss'

//COMPONENTS
import Button from '../../components/RoundedButton'
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
    this.price = Math.floor(Math.random() * 10000 + 15000)
    let id = this.props.match.params.product_id
    axios.get('/json/list-product.json').then(res => {
      for (let i in res.data) if (res.data[i].key == id) {
        res.data[i].img = `/img/product/${imgs[Math.floor(Math.random() * imgs.length)]}`
        this.setState({product: res.data[i]})
        return
      }
    })
  }

  handleChange = (slider, value) => {
    const newState = {}
    newState[slider] = value
    this.setState(newState)
  }

  renderProduct() {
    let { product } = this.state
    let { match } = this.props

    if (!product) return
    return <div className={styles.container} >
      <div className={styles.image} >
        <img src={product.img} alt="Product Image"/>
      </div>

      <div className={styles.content} >
        <h1 title={styles.title}>{product.name}</h1>
        <p title={styles.stock}>Stock tersisa: {product.stock}</p>
        <p className={styles.description}>{product.description}</p>
        <p className={styles['my-stock']}>
          <span>Stock: </span>
          
        </p>
        <Slider 
            pinned snaps min={100} max={500} step={50} 
            editable value={this.state.stock} 
            onChange={this.handleChange.bind(this, 'stock')} 
          />
        <p>Total: </p> 
        <p className={styles.total}>
          Rp {Math.floor(this.price / 100.0 * this.state.stock)},-
        </p>

        <Button to="/finish" className={styles.title} >BUY</Button>
      </div>
    </div>
  }

  state = {
    product: null,
    stock: 100,
  }

  render() {
    let {match} = this.props
    return (
      <PopupBar 
        title={match.params.product_origin_id} {...this.props} 
        anim={ANIMATE_HORIZONTAL} 
      >
        {this.renderProduct()}
      </PopupBar>
    )
  }
}