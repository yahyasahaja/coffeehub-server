//MODULES
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import Snackbar from 'react-toolbox/lib/snackbar'

//SCREENS
import asyncComponent from './components/AsyncComponent'
const Home = asyncComponent(() => import('./screens/Home'))
const Favorite = asyncComponent(() => import('./screens/Favorite'))
const Promo = asyncComponent(() => import('./screens/Promo'))
const Chat = asyncComponent(() => import('./screens/Chat'))
const Account = asyncComponent(() => import('./screens/Account'))
const PageNotFound = asyncComponent(() => import('./screens/PageNotFound'))
const Search = asyncComponent(() => import('./screens/Search'))
const Products = asyncComponent(() => import('./screens/Products'))
const Finish = asyncComponent(() => import('./screens/Finish'))

//STYLES
import styles from './assets/css/app-router.scss'

//CONFIG
import {
  TOKEN,
  END_POINT_URL,
} from './config'

//COMPONENT
import BottomTabBar from './components/BottomTabBar'

//STORE
import * as actions from './services/actions'

//INNER_CONFIG
let BOTTOM_TAB_BAR_DATA = [
  { label: 'Home', icon: 'home', url: '/home', Component: Home },
  { label: 'Disukai', icon: 'heart', url: '/favorite', Component: Favorite },
  { label: 'Promo', icon: 'tag', url: '/promo', Component: Promo },
  { label: 'Chat', icon: 'forum', url: '/chat', Component: Chat },
  { label: 'Akun', icon: 'account', url: '/account', Component: Account },
]

let bottomTabBarRouters = BOTTOM_TAB_BAR_DATA.map(data => data.url) 

//COMPONENT
class AppRouter extends Component {
  componentWillMount() {
    axios.defaults.headers.post['Content-Type'] = 'application/json'
    axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiZTAzYTViMDQtMzQ1Yi00MDE1LTkxMTQtODc0YmM2ZTNmZTY5IiwibXNpc2RuIjoiNjI4MzMzMzMzMzMzMyIsImlhdCI6MTUxODA0NzA3OCwiZXhwIjoxNTI4NDE1MDc4fQ.gb9xF-kmJGZTWUMdkUD2cOMzWCUOxHnI5lZuHLNqzoE'
    axios.defaults.baseURL = END_POINT_URL
  }

  componentDidMount() {
    window.ononline = () => this.props.online()
    window.onoffline = () => {
      this.props.offline()
      this.props.showSnackbar('You\'re offline!')
    }

    if (window.navigator.onLine) this.props.online()
    else this.props.offline()
  }

  closeSnackbar = (event, instance) => {
    this.props.hideSnackbar()
  }

  // renderTabBar = props => {
  //   return <div className={styles.page}>
  //   <div className={styles.content} >
  //   <Switch>
  //     <Route path="/home" component={Home} />
  //     <Route path="/favorite" component={Favorite} />
  //     <Route path="/promo" component={Promo} />
  //     <Route path="/chat" component={Chat} />
  //     <Route path="/account" component={Account} />
  //     <Route path="*" component={PageNotFound} />
  //   </Switch>
  //   </div>
    
  //   <Route path="*" render={props => <BottomTabBar {...props} icons={BOTTOM_TAB_BAR_DATA} />} />
  //   </div>
  // }

  render() {
    let { isOnline } = this.props
    return (
      <BrowserRouter>
        <div className={`${styles.container} ${isOnline ? '' : styles.offline}`}>
        <Switch>
          <Redirect from="/" exact to="/home" /> 
          <Route path="*" render={props => 
            <BottomTabBar {...props} data={BOTTOM_TAB_BAR_DATA} />} 
          />
        </Switch>
        <Switch>
          <Route path="/finish" component={Finish} />
          <Route path="/search" component={Search} />
          <Route path="/products/:product_origin_id" component={Products} />
        </Switch>

        <section> 
          <Snackbar
            action={this.props.snackbar.action}
            active={this.props.snackbar.active}
            label={this.props.snackbar.label}
            timeout={2000}
            onClick={this.closeSnackbar}
            onTimeout={this.closeSnackbar}
            type={this.props.snackbar.type}
          />
        </section>
        </div>
      </BrowserRouter>
    )
  }
}

export default connect(({snackbar, isOnline}) => {
  return {isOnline, snackbar}
}, actions)(AppRouter)