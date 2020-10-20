import { createApp } from 'vue'
import router from '@/router'
import store from '@/store'
import App from '@/App.vue'
import '@/registerServiceWorker'
import '@/assets/style/Index.less'

// Include any dependencies modules
import HeaderComponent from '@/components/Header.vue'

// Vue Instance
createApp(App)
  .use(store)
  .use(router)
  .component('HeaderComponent', HeaderComponent)
  .mount('#app')
