//MODULES
import React, { Component }  from 'react'
import Dropdown from 'react-toolbox/lib/dropdown'
import axios from 'axios'

//STYLES
import styles from './css/index.scss'
import theme from './css/dropdown-tehme.scss'

//COMPONENTS
import PopupBar, {ANIMATE_HORIZONTAL} from '../../components/PopupBar'

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

//COMPONENT
export default class Promo extends Component {
  componentDidMount() {
    store.dispatch(actions.showPopup())
    this.searchBar.focus()
    axios.post(END_POINT_URL, {
      query : `
        query allProducts {
          allCategories {
            name
          }
        }
      `
    }).then(res => {
      let categories = res.data.data.allCategories.map(({name}, i) => 
        ({value: name, label: name}))
        
      categories.unshift({ value: 'all', label: 'Semua Cateogry'})
      console.log('RESULT:', res.data.data, 'cat', categories)
      this.setState({categories})
    }).catch(err => console.log(err))
  }

  componentWillUnmount() {
    store.dispatch(actions.hidePopup())
  }

  state = { filter: 'terbaru', category: 'terbaru', categories }

  handleChange(name, value) {
    this.setState({[name]: value})
  }

  renderBar() {
    //if (window.navigator.userAgent.indexOf("Mac") == -1) 
    return [
      <Dropdown
        auto allowBlank={false} theme={theme}
        onChange={this.handleChange.bind(this, 'filter')}
        source={filters}
        value={this.state.filter}
        className={styles.dropdown}
        label="Filter"
      />,
      <Dropdown
        auto allowBlank={false} theme={theme}
        onChange={this.handleChange.bind(this, 'category')}
        source={this.state.categories}
        value={this.state.category}
        className={styles.dropdown}
        label="Category"
      />
    ]
  }

  render() {
    return (
      <PopupBar 
        title="Search" {...this.props} 
        anim={ANIMATE_HORIZONTAL} 
        component={(
          <div className={styles.search} >
            <input type="text" placeholder="Meu belanja apa hari ini?" 
              ref={el => this.searchBar = el}
            />
          </div>
        )}
        anotherComponents={[
          <div className={styles.bar} >
            {this.renderBar()}
          </div>
        ]}
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
        <h1>Disukai Example</h1>
        <h1>Disukai Example</h1>
        <h1>Disukai Example</h1>
        <h1>Disukai Example</h1>
      </PopupBar>
    )
  }
}