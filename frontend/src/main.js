import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store/index'

import 'materialize-css/dist/js/materialize.min'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import PrimeVue from 'primevue/config'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Menubar from 'primevue/menubar'
import FileUpload from 'primevue/fileupload';
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(store).use(router).use(vuetify).use(PrimeVue).component('Menubar', Menubar).component('InputText', InputText).component('FileUpload', FileUpload).component('Button', Button).mount('#app')
