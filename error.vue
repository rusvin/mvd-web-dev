<template>
    <div>
        <v-row v-if="error.statusCode == 404" class="justify-center pa-5">
            <v-col cols="12" md="6" sm="12">
                <img src="/images/error/404.svg" alt="404 Page Not Found">
            </v-col>
            <v-col cols="12" class="text-center">
                <h1 class="text-grey-darken-3">
                    Oeps...
                </h1>
                <br>
                <h3 class="text-h6 text-grey-darken-1">
                    We hebben de pagina niet kunnen vinden die je zocht
                </h3>
                <br>
                <v-btn color="primary" size="x-large" @click="goToDashBoard">
                    Ga naar Mijn contracten
                </v-btn>
            </v-col>
        </v-row>
        <v-row v-else align="center" class="h-screen">
            <v-col cols="12" class="text-center">
                    <span class="text-h5 text-grey-darken-3">
                        {{ error.message }}
                    </span>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
    const router = useRouter()
    const props = defineProps({
        error: Object
    })

    const goToDashBoard = () => {
        router.push({path: '/dashboard/contracten'})
    }
</script>