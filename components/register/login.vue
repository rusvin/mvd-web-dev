<template>
    <div>
        <v-card-text>
            <h1 class="text-center">Inloggen</h1>
            <br>
            <p class="text-center">
                Log in op je persoonlijke account. Regel zelf je contracten, vergelijkingen en ontvang persoonlijk advies.
            </p>
        </v-card-text>
        <v-card-text v-if="errorMessage">
            <v-alert type="error" variant="tonal" :icon="'mdi-close-circle-outline'">
                {{ errorMessage }}
            </v-alert>
        </v-card-text>
        <v-card-text>
            <v-form ref="loginForm" @submit.prevent="userLogin" lazy-validation>
                <v-row>
                    <v-col cols="12">
                        <v-text-field
                                label="E-mailadres"
                                id="email-adres"
                                type="email"
                                name="email"
                                color="primary"
                                :rules="emailRules"
                                v-model="userEmail"
                                @keyup.enter="userLogin"
                                variant="outlined"
                        />
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                                label="Wachtwoord"
                                :type="isPasswordVisible ? 'text' : 'password'"
                                :append-inner-icon="isPasswordVisible ? 'mdi-lock-open' : 'mdi-lock'"
                                @click:append-inner="isPasswordVisible = !isPasswordVisible"
                                id="password"
                                name="password"
                                color="primary"
                                placeholder="Wachtwoord"
                                :rules="passwordRules"
                                v-model="userPassword"
                                @keyup.enter="userLogin"
                                variant="outlined"
                        />
                    </v-col>
                    <v-col cols="12">
                        <v-btn color="primary" size="x-large" block @click="userLogin">
                            Inloggen
                        </v-btn>
                    </v-col>
                    <v-col cols="12" class="text-center">
                        <p>Of</p>
                        <br>
                        <router-link to="/dashboard/wachtwoord-reset/" class="mx-2">
                            Wachtwoord vergeten?
                        </router-link>
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
    </div>
</template>

<script setup lang="ts">
    import {login} from "~/composables/useAuth";

    const loginForm = ref(null);
    const userEmail = ref(null)
    const userPassword = ref(null)
    const errorMessage = ref(null)
    const isPasswordVisible = ref(false)
    const passwordRules = [v => !!v || 'Wachtwoord is verplicht']
    const emailRules = [
        v => !!v || 'E-mailadres is verplicht',
        v => /.+@.+/.test(v) || 'E-mailadres is incorrect',
    ]

    const userLogin = () => {
        loginForm.value.validate().then(res => {
            if (res.valid) {
                login(userEmail.value, userPassword.value).then((result) => {
                    if (!result) {
                        errorMessage.value = 'Het lijkt erop dat je je e-mailadres of wachtwoord niet goed hebt ingevoerd. Kun je het nog een keer proberen?'
                    }
                })
            }
        })
    }
</script>