//MODULES
import React, { Component }  from 'react'

//STYLES
import styles from './css/index.scss'

//COMPONENTS
import PopupBar, {ANIMATE_HORIZONTAL} from '../../components/PopupBar'
import Button from '../../components/RoundedButton'

//STORE
import store from '../../services/store'
import * as actions from '../../services/actions'

//COMPONENT
export default class Finish extends Component {
  componentWillMount() {
    store.dispatch(actions.showPopup())
  }

  componentWillUnmount() {
    store.dispatch(actions.hidePopup())
  }

  render() {
    return (
      <PopupBar
        title="Order" {...this.props} 
        anim={ANIMATE_HORIZONTAL} 
      >
        <div className={styles.container}>
        <div className={styles.icon}>
        <span className="mdi mdi-send" />
        </div>
        <Button>Sudah Sampai</Button>
        </div>
      </PopupBar>
    )
  } 
} 