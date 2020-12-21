import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RouterView from '@/router/index'
import {
  HeaderComponent,
  FooterComponent
} from '@/components'

export default class Application extends Component {
  // __RENDER <React.Methods>
  render () {
    return (
      <React.StrictMode>
        <Router>

          <HeaderComponent />
          <RouterView />
          <FooterComponent />

        </Router>
      </React.StrictMode>
    )
  }
}
