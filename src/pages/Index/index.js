import React, { Component } from 'react'
import {
  CoverComponent
} from './components'
import './style.less'

export default class IndexContainer extends Component {
  constructor (props) {
    super(props)
  }

  // __STATE <Initial.State>
  state = {}

  // __RENDER <React.Methods>
  render () {
    return (
      <div className="ui--index">
        <CoverComponent />
      </div>
    )
  }
}
