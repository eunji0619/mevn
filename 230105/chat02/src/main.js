import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { io } from 'socket.io-client'

const app = createApp(App)
const socket = io()

app.config.globalProperties.$socket = socket
app.config.globalProperties.mmm = '마마무'

app.use(store).use(router).mount('#app')