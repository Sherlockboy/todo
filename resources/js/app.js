require('./bootstrap');
// import 'bootstrap';

import Vue from 'vue'
import App from './vue/app.vue'
import { BootstrapVue } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

library.add(faPlus, faTrash)
Vue.component('fa-icon', FontAwesomeIcon)

const app = new Vue({
    el: '#app',
    components: { App }
});