//MODULES
import React, { Component }  from 'react'
import { Link } from 'react-router-dom'

//STYLES
import styles from './css/title-bar.scss'

//COMPONENT
export default class Home extends Component {
  render() {
    let {cart} = this.props
    return (
      <div className={styles.container} >
        <div className={styles.title}><span>CoffeeHub</span></div>
        {cart && <Link to="/cart" className={`mdi mdi-cart ${styles.icon}`} /> }
      </div>
    )
  } 
} 