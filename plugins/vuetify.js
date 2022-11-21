import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import colors from 'vuetify/lib/util/colors'

const vergelijkdirectLightTheme = {
    dark: false,
    colors: {
        primary: colors.blue.base,
        error: colors.red.base,
        success: '#48C529',
        "on-success": colors.shades.white,
    }
}

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        icons: {
            iconfont: 'mdi'
        },
        theme: {
            defaultTheme: 'vergelijkdirectLightTheme',
            themes: {
                vergelijkdirectLightTheme,
            }
        }
    })

    nuxtApp.vueApp.use(vuetify)
})