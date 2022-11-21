<template>
    <div>
        <v-container>
            <div id="internet-tv-bellen"></div>
        </v-container>
    </div>
</template>

<script setup lang="ts">
    import { useTheme } from 'vuetify'

    definePageMeta({
        middleware: 'auth'
    })

    const themeColors = useTheme().global.current.value.colors

    const insertScript = () => {
        const userData = useUserData().value;
        const houseNumber = userData.user.houseNumber ? userData.user.houseNumber : ''
        const houseNumberAddition = userData.user.houseNumberAddition ? userData.user.houseNumberAddition : ''

        const configScript = document.createElement('script')
        configScript.setAttribute('type', 'text/javascript')
        configScript.innerHTML = `var partnerCompare = [];
        partnerCompare.push({
            'affiliateID': 9753,
            'path': 'vergelijken',
            'postalcode': '${userData.user.zipcode ? userData.user.zipcode.toUpperCase() : ''}',
            'housenumber': '${houseNumber + houseNumberAddition}',
            'category': 'internet-tv',
            'headingTextColor': '${themeColors.primary}',
            'css': '${location.origin}/css/third-party/partner-breedbandwinkel.css'
        });`
        document.head.appendChild(configScript)

        const script = document.createElement("script");
        script.type = 'text/javascript'
        script.setAttribute('src', 'https://partner.breedbandwinkel.nl/pc');
        script.setAttribute('data-array', 'partnerCompare');

        document.getElementById('internet-tv-bellen').appendChild(script)
    }

    onMounted(() => {
        insertScript()
    })
</script>
