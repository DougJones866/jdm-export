import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js';
import 'boxicons';
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import ContactForm from './components/ContactForm.vue';

const app=  createApp(App)



app.use(router);

app.component('the-header', TheHeader);
app.component('the-footer', TheFooter);
app.component('contact-form', ContactForm);



app.mount('#app');