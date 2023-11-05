import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import { faMagnifyingGlass,faEnvelope,faHeart} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import{faHeart as regularHeart} from  "@fortawesome/free-regular-svg-icons"

import { library } from '@fortawesome/fontawesome-svg-core'


library.add(faMagnifyingGlass,faGithub, faFacebook,faEnvelope,faHeart,regularHeart)


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)


app.mount('#app')
