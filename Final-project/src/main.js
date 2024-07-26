import { createApp } from 'vue';
import App from './App.vue';
// import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/style.css';
import '@fortawesome/fontawesome-free/css/all.css';
// import 'swiper/swiper-bundle.css';
// import AOS from 'aos';
import 'aos/dist/aos.css';
import router from './router';

const app = createApp(App)

app.use(router)
app.mount('#app')
