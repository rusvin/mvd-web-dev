<template>
    <div>
        <div v-html="tool.div"></div>
    </div>
</template>

<script setup lang="ts">
    import {Tools} from '../../models/thirdPartyComparingTools.model'
    const router = useRouter()
    import { useTheme } from 'vuetify'

    const props = defineProps({
        insurance: { type: String, required: true }
    })

    const themeColors = useTheme().global.current.value.colors
    const tools: any = Tools
    const tool = ref({ div: '' })
    const title = ref('')

    const getTemplate = () => {
        const insurance = tools[props.insurance]

        if (typeof tool === 'undefined') {
            router.push({ path: '/dashboard/contracten' })
            return
        }
        title.value = insurance.title
        tool.value = insurance
    }

    const healthScript = () => {
        let script = document.createElement('script')
        script.setAttribute('type', 'text/javascript')
        script.innerHTML = `var ESOS_CONFIG = {
                name: "Mijn Vergelijk Direct",
                host: "",
                slug: "",
                language: "zorgverzekering",
                funnel: "health",
                baseUrl: "https://api2.overstappen.nl",
                authKey: "bWlqbl92ZXJnZWxpamtkaXJlY3Q6aVV5YmQ3eTYhX3dIODdkcw==",
                theme: {
                    components: {
                        buttons: {
                            activeState: "#1337ec",
                            primary: "#e1083e"
                        },
                        underlinedText: "#12de9a"
                    }
                }
            };`
        document.head.appendChild(script)
    }

    const energyScript = () => {
        let script = document.createElement('script')
        script.setAttribute('type', 'text/javascript')
        script.innerHTML = `var ESOS_CONFIG = {
                name: "Mijn Vergelijk Direct",
                host: "",
                slug: "",
                language: "energy",
                funnel: "energy",
                baseUrl: "https://api2.overstappen.nl",
                authKey: "Z3JlZW5saWdodDpRMjJJIThrZGlCZHVmMmQ4MiE=",
                theme: {
                colors: {
                    brand: "${themeColors.primary}",
                    primary: "${themeColors.success}",
                    primaryB: "${themeColors.success}",
                    },
                }
            };`
        document.head.appendChild(script)
    }

    const createScriptAndLink = () => {
        if (tool.value.script.src) {
            let script = document.createElement('script')
            script.async = true
            script.src = tool.value.script.src
            script.type = tool.value.script.type
            document.head.appendChild(script)
        }

        if (tool.value.link.href) {
            let style = document.createElement('link')
            style.href = tool.value.link.href
            style.type = tool.value.link.type
            style.rel = tool.value.link.rel
            document.head.appendChild(style)
        }
    }

    const injectFilters = () => {
        if (tool.value.filters) {
            let script = document.createElement('script')
            script.type = 'text/javascript'
            script.innerHTML = `var nul318m_filters = ${JSON.stringify(Object.assign(tool.value.filters))}`
            document.head.appendChild(script)
        }
    }

    onMounted(() => {
        getTemplate()
        if (props.insurance === 'zorgverzekering') {
            healthScript()
        } else if (props.insurance === 'energie') {
            energyScript()
        }
        injectFilters()
        createScriptAndLink()
    })
</script>
<style lang="css">
    .cuwvye {
        position: relative !important;
    }
    .kyHvXQ {
        color: v-bind(themeColors.primary);
    }
</style>