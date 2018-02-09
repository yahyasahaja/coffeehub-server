//MODULES
import React, { Component }  from 'react'

//STYLES
import styles from './css/index.scss'

//COMPONENTS
import TopBar, { HIDE } from '../../components/TopBar'

//COMPONENT
export default class Favorite extends Component {
  render() {
    return (
      <TopBar
        fly={{
          title: {cart: true},
          mode: HIDE
        }}

        isSelected={this.props.isSelected}
      >
        <h1>Disukai Example</h1>
        <h1>Disukai Example</h1>
        <h1>Disukai Example</h1>
        <h1>Disukai Example</h1>
        <h1>Disukai Example</h1>
        <h1>Disukai Example</h1>
        <h1>Disukai Example</h1>
        <h1>Disukai Example</h1>
        <h1>Disukai Example</h1>
        <h1>Disukai Example</h1>
        <h1>Disukai Example</h1>
        <h1>Disukai Example</h1>
        <h1>Disukai Example</h1>
        <h1>Disukai Example</h1>
        <h1>Disukai Example</h1>
        <h1>Disukai Example</h1>
        <h1>Disukai Example</h1>
        <h1>Disukai Example</h1>
      </TopBar>
    )
  }
}