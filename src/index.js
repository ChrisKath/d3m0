import { render } from 'react-dom'
import { Provider } from 'react-redux'
import AppContainer from '@/app'
import store from '@/store'
import '@/utils/defineProperty'
import '@/assets/style/index.less'

// Create instance react-app
render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
document.getElementById('app'))
