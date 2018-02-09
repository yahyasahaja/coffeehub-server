//MODULES
import React, { Component }  from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

//STYLES
import styles from './css/index.scss'

//COMPONENTS
import TopBar, { APPEAR } from '../../components/TopBar'
import RoundedButton from '../../components/RoundedButton'
import Card from '../../components/Card'

let PRODUCT_ORIGINS = [
  'Malang',
  'Madiun',
  'Bondowoso',
  'Banyuwangi',
  'Kediri',
  'Sidoharjo',
]

//COMPONENT
export default class Home extends Component {
  renderProductOrigins() {
    return PRODUCT_ORIGINS.map((data, i) => (
      <Link to={`/products/${data}`} className={styles.origin} key={i} >
        <span>{data}</span>
      </Link>
    )) 
  }

  render() {
    return (
      <TopBar 
        relative={{
          title: {cart: true}, 
          search: {cart: false},
        }}

        fly={{
          search: {cart: true},
          mode: APPEAR
        }} 

        isSelected={this.props.isSelected}
      >
        <div className={styles.container} >
        {this.renderProductOrigins()}
        </div>
      </TopBar>
    )
  }
}