//MODULES
import React, { Component }  from 'react'

//STYLES
import styles from './css/index.scss'

//COMPONENTS
import TopBar, { ABSOLUTE } from '../../components/TopBar'

//COMPONENT
export default class Chat extends Component {
  render() {
    return (
      <TopBar
        fly={{
          title: {cart: true},
          mode: ABSOLUTE
        }}
      >
        <span>Chat Example</span>
      </TopBar>
    )
  } 
} 