
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store/index'

import 'materialize-css/dist/js/materialize.min'

import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'

const vuetify = createVuetify({
    components,
    directives,
})


import Vue from 'vue'


Vue.config.productionTip = false
Vue.use(store)
Vue.use(router)

new Vue({
    render: h => h(App),
    store,
    router,
    vuetify
}).$mount('#app')