<template>
    <verify-hash v-if="hasHash" :hash="hash"/>
    <v-card-text v-if="!hasHash">
        <v-row>
            <v-col cols="12" class="d-flex justify-center">
                <div class="auth-switch">
                    <v-btn
                            :color="loginColor"
                            :class="{ 'elevation-0': !isLogin }"
                            class="rounded-pill text-caption"
                            @click="isLogin = true"
                    >
                        <span class="text-subtitle-2 font-weight-bold">Inloggen</span>
                    </v-btn>
                    <v-btn
                            :color="registerColor"
                            :class="{ 'elevation-0': isLogin }"
                            class="rounded-pill text-caption ml-1"
                            @click="isLogin = false"
                    >
                        <span class="text-subtitle-2 font-weight-bold">Aanmelden</span>
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </v-card-text>
    <v-window v-model="isLogin" v-if="!hasHash">
        <v-window-item :value="false">
            <user-registration/>
        </v-window-item>
        <v-window-item :value="true">
            <user-login/>
        </v-window-item>
    </v-window>
</template>

<script setup lang="ts">
    import userLogin from '~~/components/register/login.vue';
    import userRegistration from '~~/components/register/registration.vue'
    import verifyHash from '~~/components/register/verifyHash.vue';

    definePageMeta({
        middleware: 'guest',
        layout: 'guest'
    })

    const isLogin = ref(false)
    const loginColor = ref('white')
    const registerColor = ref('blue')
    const route = useRoute()
    const hasHash = ref(false)
    const hash = ref('')

    watch(isLogin, async () => {
        loginColor.value = isLogin.value ? 'blue' : 'white'
        registerColor.value = isLogin.value ? 'white' : 'blue'
    })

    const redirectionUri = computed((): string => {
        if (route.query.hasOwnProperty('redirect_uri')) {
            return route.query['redirect_uri']
        }

        return ''
    })

    const checkForHash = (): void => {
        const QueryParams: any = route.query

        if (Object.keys(QueryParams).length === 0) {
            return
        }

        if (QueryParams.hash) {
            hasHash.value = true
            hash.value = QueryParams.hash
        }
    }

    onMounted(() => {
        checkForHash()

        if (redirectionUri) {
            sessionStorage.setItem('redirection_uri', redirectionUri)
        }
    })
</script>
