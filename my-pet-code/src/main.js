import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';

import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/mdc-light-indigo/theme.css';
import 'primeicons/primeicons.css';

createApp(App)
    .use(router)
    .use(PrimeVue)
    .component('Menubar', Menubar)
    .component('Button', Button)
    .mount('#app')
