

require('./bootstrap');
window.Vue = require('vue');
// Vuex
import Vuex from 'vuex'
Vue.use(Vuex)
import storeData from './store/index'
const store = new Vuex.Store(
  storeData
)

// vue router
import VueRouter from 'vue-router'
import {routes} from './routes'
import { Form, HasError, AlertError } from 'vform'
Vue.use(VueRouter)

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-master', require('./components/admin/AdminMaster.vue').default);


// v-form
window.Form = Form;	
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

// sweetalert2  
import Swal from 'sweetalert2'
window.Swal = Swal;
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

Toast.fire({
  type: 'success',
  title: 'Welcome back'
})
window.Toast = Toast




const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history',

})

const app = new Vue({
    el: '#app',
    data :{
    	message: "ABC"
    },
    router,
    store
});
