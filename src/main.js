import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueGoogleMaps from "@fawmi/vue-google-maps";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// createApp(App).use(store).use(router).mount('#app')

const app = createApp(App);
app.use(VueGoogleMaps, {
    load: {
        key: 'YOUR_API_KEY_COMES_HERE',
        // language: 'de',
    },
}).use(store).use(router).mount('#app')
