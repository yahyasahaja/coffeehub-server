//MODULES
import React, { Component }  from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

//STYLES
import styles from './css/index.scss'

//COMPONENTS
import TabBar from './TabBar'

//STORE
import * as actions from '../../services/actions'

//COMPONENT
class BottomTabBar extends Component {
  componentWillMount() {
    this.updateRoutes(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.updateRoutes(nextProps)
  }

  updateRoutes(nextProps) {
    let { match } = nextProps
    let { routers, raw } = this.state
    let { data } = this.props

    let currentPath = match.url
    
    for (let i in routers) {
      if (currentPath.indexOf(routers[i].url) === 0) {
        this.setState({currentPage: i})
        return;
      }
    }
    //console.log(nextProps, this.props)
    for (let i in data) {
      if (currentPath.indexOf(data[i].url) === 0) {
        this.setState(state => {
          let loc = [...routers]
          loc.push(data[i])

          return {
            routers: loc,
            currentPage: routers.length,
          }
        })
        return;
      }
    }
  }

  state = {
    routers: [],
    currentPage: 0,
  }

  renderData() {
    let { routers, currentPage } = this.state
    
    return routers.map((data, i) => (
      <div style={{
        display: currentPage == i ? 'block' : 'none'
      }} className={styles.container} >
        <data.Component {...this.props} isSelected={currentPage == i} />
      </div>
    ))
  }

  render() {
    let { data, isPopup } = this.props
    return (
      <div className={styles.container} 
        style={{
          overflow: isPopup ? 'hidden' : 'unset'
        }} 
      >
        <div className={styles.content}>
          {this.renderData()}
        </div>

        <Route path="*" render={props => <TabBar {...props} icons={data} />} />
      </div>
    )
  } 
} 

export default connect(({isPopup}) => {
  return {isPopup}
}, actions)(BottomTabBar)