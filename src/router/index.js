import React, { Component, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './routes'

export default class RouterView extends Component {
  constructor (props) {
    super(props)
  }

  // __RENDER <React.Methods>
  render () {
    return (
      <div className="ui--router-view">
        <Switch>
          <Suspense fallback={<></>}>
            {
              routes.map((route, idx) => (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))
            }
          </Suspense>
        </Switch>
      </div>
    )
  }
}
