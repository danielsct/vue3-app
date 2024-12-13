import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css'
import './style.css'
import './assets/base.css'
import App from './App.vue'
import router from './router';


const app = createApp(App);
app.use(PrimeVue, {
    theme: 'none'
});
app.use(router);
//createApp(App).mount('#app')
app.mount('#app')
