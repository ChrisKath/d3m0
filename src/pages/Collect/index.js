import React, { Component } from 'react'
import './style.less'

export default class CollectContainer extends Component {
  constructor (props) {
    super(props)
    
    this.state = { // initialState
      unset: undefined
    }
  }

  // __RENDER <React.Methods>
  render () {
    return (<>
      <div className="ui--collect">
        .ui--collect
      </div>
      
      <div className="ui--collect-modal">
        .ui--collect-modal
      </div>
    </>)
  }
}
