<template>
    <container>
        <v-row>
            <v-col md="3">
                <card>
                    <h1>User details</h1>
                    <pre>{{user}}</pre>
                    <v-btn color="blue" block @click="userLogout">
                        Logout
                    </v-btn>
                </card>
            </v-col>
        </v-row>
    </container>

</template>
<script setup lang="ts">
    import {logout} from "~/composables/useAuth";

    const router = useRouter()
    const {$mijn} = useNuxtApp()
    const user = ref({})

    definePageMeta({
        middleware: 'auth'
    })

    const userLogout = (): void => {
        $mijn.logout()
        logout()
        router.push({path: '/dashboard/inloggen/'})
    }

    const sendRequest = async function (): Promise<any> {
        $mijn.getUserData().then((res: any) => {
            user.value = res
        }).catch((err: any) => {
            console.error(err)
        })
    }

    onMounted(() => {
        sendRequest()
    })
</script>