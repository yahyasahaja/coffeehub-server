//MODULES
import React, { Component }  from 'react'
import { Link } from 'react-router-dom'

//STYLES
import styles from './css/card.scss'

//COMPONENTS
import Button from './RoundedButton'

//COMPONENT
export default class ProductOriginCard extends Component {
  render() {
    let {img, title, stock, price, link} = this.props
    return (
      <div className={styles.container} >
        <div className={styles.image}>
          <img src={img} alt="CardImage"/>
        </div>

        <div className={styles.content} >
        <div className={styles.top}>
        <span className={styles.title} >{title}</span>
        <span className={styles.price} >{`Rp ${price},- / 100 gram`}</span>
        </div>
        <span className={styles.stock} >{`${stock / 1000.0} kg`}</span>
        <Button to={link} className={styles.title} >BUY</Button>
        </div>
      </div>
    )
  } 
} 