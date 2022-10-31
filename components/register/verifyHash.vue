<template>
    <div>
        <v-card-text v-if="error">
            <v-alert type="error" title="Oeps.." variant="tonal" icon="mdi-close-circle">
                Het lijkt erop dat er iets fout gaat. Probeer het later opnieuw of neem contact met ons op
                (Chat, Telefoon of Whatsapp 035-6857888)
            </v-alert>
        </v-card-text>
        <v-card-text v-else>
            <v-row>
                <v-col cols="12" class="text-center">
                    <v-progress-circular
                            :size="50"
                            color="info"
                            indeterminate
                    ></v-progress-circular>
                    <p class="mt-10 text-lg">
                        Account wordt geactiveerd
                    </p>
                </v-col>
            </v-row>
        </v-card-text>
    </div>
</template>

<script setup lang="ts">
    import {setToken} from "~/composables/useAuth";

    const {$mijn} = useNuxtApp()
    const router = useRouter()

    const props = defineProps({
        hash: {type: String, required: true}
    })

    const error = ref(false)

    const SendRequest = async function (): Promise<any> {
        $mijn.verifyUserByHash(
            {
                hash: props.hash
            }
        ).then((res: any) => {
            const token = res.access_token
            const expiresIn = res.expires_in
            if (token) {
                SetToken(token, expiresIn).then(() => {
                    setTimeout(() => {
                        //TODO add notification
                        router.push({path: '/dashboard/contracten'})
                    }, 5000)
                })
            }
        }).catch((err: any) => {
            if (err.data.message_code === 'expired_code') {
                redirectToLogin()
            }
            error.value = true
        })
    }

    const SetToken = async function (token: string, expiresIn: number) {
        $mijn.setJWTToken(token)
        setToken(token, expiresIn)
    }

    const redirectToLogin = async function () {
        await router.replace({path: '/dashboard/inloggen/'})
    }

    onMounted(() => {
        if (props.hash) {
            SendRequest()
        } else {
            router.push({path: '/dashboard/aanmelden/'})
        }
    })
</script>
