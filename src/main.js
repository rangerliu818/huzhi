import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './index.css'
import './mock/index.js'

createApp(App).use(router).mount('#app')
