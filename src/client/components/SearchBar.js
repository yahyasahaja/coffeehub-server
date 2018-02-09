//MODULES
import React, { Component }  from 'react'
import { Link } from 'react-router-dom'

//STYLES
import styles from './css/search-bar.scss'

//COMPONENT
export default class Home extends Component {
  render() {
    let {cart} = this.props
    return (
      <div className={styles.container} >
        <Link className={styles.search} to="/search">
          <span className={`mdi mdi-magnify ${styles.icon}`} />
          <span className={styles.placeholder}>Mau belanja apa hari ini?</span>
        </Link>
        {cart && <Link to="/cart" className={`mdi mdi-cart ${styles.icon}`} /> }
      </div>
    )
  } 
} 