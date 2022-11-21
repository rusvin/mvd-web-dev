<template>
    <v-app>
        <v-container>
            <v-row align="center" class="h-screen">
                <v-col md="4" offset-md="4" class="text-center">
                    <v-progress-circular
                        :size="75"
                        color="primary"
                        indeterminate
                    ></v-progress-circular>
                    <p class="mt-10 text-medium-emphasis text-h6">
                        Even geduld A.U.B
                    </p>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script setup lang="ts">
    import {isAuthorized, setToken, logout} from "~/composables/useAuth";

    const {$mijn} = useNuxtApp()
    const route = useRoute()
    const router = useRouter()

    let token: string = ''
    let publicId: string = ''
    let params: any = {
        id: '',
        token: ''
    }

    function setParamInMemory() {
        if (typeof params.id === 'undefined' || typeof params.token === 'undefined') {
            router.replace({path: '/dashboard/inloggen/'})
            return
        }

        publicId = params.id
        token = params.token
    }

    function loginAs() {
        if (isAuthorized) {
            logout()
        }
        $mijn.loginAs({
            public_id: publicId,
            token: token
        }).then((response: any) => {
            setToken(response.access_token, response.expires_in)
            try {
                $mijn.setJWTToken(`${response.token_type} ${response.access_token}`)
                router.replace({path: '/dashboard/contracten'})
            } catch (error) {
                logout()
                router.replace({path: '/dashboard/inloggen/'})
            }
        }).catch(() => {
            logout()
            router.replace({path: '/dashboard/inloggen/'})
        })
    }

    onMounted(() => {
        params = route.params
        setParamInMemory()
        loginAs()
    })
</script>