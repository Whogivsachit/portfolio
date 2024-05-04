import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/index.css';
import store from './store/store';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

const app = createApp(App)
app.use(router)
app.use(store)
library.add(fas, fab)
app.component('faIcon', FontAwesomeIcon)
app.mount('#app')