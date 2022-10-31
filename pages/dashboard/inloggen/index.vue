<template>
    <div>
        <v-card-text>
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
        <v-window v-model="isLogin">
            <v-window-item :value="true">
                <user-login/>
            </v-window-item>
            <v-window-item :value="false">
                <user-registration/>
            </v-window-item>
        </v-window>
    </div>
</template>
<script setup lang="ts">
    import userLogin from '~~/components/register/login.vue';
    import userRegistration from '~~/components/register/registration.vue'

    definePageMeta({
        middleware: 'guest',
        layout: 'guest'
    })

    const isLogin = ref(true)
    const loginColor = ref('blue')
    const registerColor = ref('white')

    watch(isLogin, async () => {
        loginColor.value = isLogin.value ? 'blue' : 'white'
        registerColor.value = isLogin.value ? 'white' : 'blue'
    })

</script>
<style lang="scss">
    .auth-switch {
        border: 2px solid #EFEFEF;
        border-radius: 50px;
        padding: 1px
    }
</style>

