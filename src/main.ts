import { createApp } from 'vue'
import store from '@/store'
import App from '@/App.vue'
import '@/registerServiceWorker'
import '@/registerDefineProperty'
import '@/assets/style/Index.less'

// Include any dependencies modules
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

// Vue Instance
createApp(App)
  .use(store)
  .component('HeaderComponent', Header)
  .component('FooterComponent', Footer)
  .mount('#app')
