import { createApp } from 'vue'
import router from '@/router'
import store from '@/store'
import App from '@/App.vue'
import '@/registerServiceWorker'
import '@/assets/style/Index.less'

// Vue Instance
createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
