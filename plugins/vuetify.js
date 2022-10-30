import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        icons: {
            iconfont: 'mdi'
        },
    })

    nuxtApp.vueApp.use(vuetify)
})