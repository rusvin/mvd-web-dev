<template>
    <div>
        <v-card
            color="primary"
            variant="tonal"
            icon="mdi-alert"
        >
            <template v-slot:text icon="mdi-alert">
                <p class="text-h6 my-2">
                    Energiecontracten vergelijken?
                    Check nu zelf welk energiecontract voor jou het goedkoopste is!
                </p>
                <v-icon icon="mdi-alert" color="primary" class="mr-1 pb-1"/>
                Energie vergelijken in de huidige markt
                Door de stijgende energieprijzen bieden energieleveranciers minder contracten aan. Het aanbod kan per
                uur verschillen. Bekijk het actuele aanbod in onze energievergelijker en check of jij kunt besparen. Heb
                je hulp nodig? Bel, chat of whatsapp ons! Nu geen tijd? Plan dan een afspraak in met één van onze
                experts!
            </template>
        </v-card>
        <third-party-comparing-tools :insurance="comparisonTool"/>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
        middleware: 'auth'
    })

    useHead({
        script: [
            {
                src: 'https://ivanhoe.io/iv.js',
                body: true
            }
        ]
    })

    const router = useRouter()
    const route = useRoute()
    const userData = useUserData().value;
    const comparisonTool = 'energie'

    const redirectWithParams = () => {
        if (!route.query.email) {
            const queryParams = {
                email: userData.user.email,
                postcode: userData.user.zipcode ? userData.user.zipcode.toUpperCase() : '',
                huisnummer: userData.user.houseNumber,
                toevoeging: userData.user.houseNumberAddition
            }

            router.push({ path: "/dashboard/vergelijken/energie/energie/", query: queryParams });
        }
    }

    onMounted(() => {
        redirectWithParams()
    })
</script>