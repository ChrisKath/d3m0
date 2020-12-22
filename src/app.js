import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import RouterView from '@/router'
import store from '@/store'
import {
  HeaderComponent,
  FooterComponent
} from '@/components'

export default function Application () {
  // __RENDER
  return (
    <Provider store={store}>
      <StrictMode>
        <BrowserRouter>
          <HeaderComponent />
          <RouterView />
          <FooterComponent />
        </BrowserRouter>
      </StrictMode>
    </Provider>
  )
}
