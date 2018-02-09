//MODULES
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//STYLES
import styles from './css/icon.scss'    
 
//COMPONENT
export default class BottomTabBar extends Component {
  render() {
    let { active, url, icon, label } = this.props
    return (
      <Link className={styles.container} to={url} >
        <span className={`mdi mdi-${icon} ${active ? styles.active : ''} ${styles.icon}`} />
        <span className={`${styles.label} ${active ? styles.active : ''}`}>{label}</span>
      </Link> 
    )  
  }
}