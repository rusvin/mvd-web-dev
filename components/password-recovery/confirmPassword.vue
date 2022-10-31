<template>
    <div>
        <v-card-text>
            <h1 class="text-center">Wachtwoord instellen</h1>
            <br>
            <p class="text-center">
                Vul hieronder een wachtwoord in om deze te gebruiken voor mijn.vergelijkdirect.com
            </p>
        </v-card-text>
        <v-card-text v-if="message">
            <v-alert prominent :type="messageType" variant="outlined">
                {{ message }}
            </v-alert>
        </v-card-text>
        <v-card-text>
            <v-form ref="confirmRecoveryForm" @submit.prevent="sendPasswordRecoveryConfirm" lazy-validation>
                <v-row>
                    <v-col cols="12" v-if="!hideInput">
                        <v-text-field
                                label="E-mailadres"
                                placeholder="gebruiker@email.nl"
                                id="email-adres"
                                type="email"
                                name="email"
                                color="blue"
                                :rules="validationRules.email"
                                v-model.lazy="userEmail"
                                :disabled="isEmailDisabled"
                                @keyup.enter="sendPasswordRecoveryEmail"
                                variant="outlined"
                        />
                    </v-col>
                    <v-col cols="12" v-if="!hideInput">
                        <v-text-field
                                label="Kies je nieuwe wachtwoord"
                                placeholder="Wachtwoord"
                                id="password"
                                name="password"
                                :type="isPasswordVisible ? 'text' : 'password'"
                                :append-inner-icon="isPasswordVisible ? 'mdi-lock-open' : 'mdi-lock'"
                                @click:append-inner="isPasswordVisible = !isPasswordVisible"
                                color="blue"
                                :rules="validationRules.password"
                                v-model.lazy="userPassword"
                                @keyup.enter="sendPasswordRecoveryConfirm"
                                variant="outlined"
                        />
                    </v-col>
                    <v-col cols="12" v-if="!hideInput">
                        <v-text-field
                                label="Nieuw wachtwoord bevestigen"
                                placeholder="Wachtwoord bevestigen"
                                id="password-confirm"
                                name="password-confirm"
                                :type="isConfirmVisible ? 'text' : 'password'"
                                :append-inner-icon="isConfirmVisible ? 'mdi-lock-open' : 'mdi-lock'"
                                @click:append-inner="isConfirmVisible = !isConfirmVisible"
                                color="blue"
                                :rules="validationRules.confirmPassword"
                                v-model.lazy="userPasswordConfirm"
                                @keyup.enter="sendPasswordRecoveryConfirm"
                                variant="outlined"
                        />
                    </v-col>
                    <v-col cols="12" v-if="hideInput">
                        <v-btn block color="blue" @click="gotoDashboard">
                            Ga naar inloggen
                        </v-btn>
                    </v-col>
                    <v-col cols="12" v-else>
                        <v-btn block color="blue" @click="sendPasswordRecoveryConfirm">
                            Wachtwoord herstellen
                        </v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
    </div>
</template>

<script setup lang="ts">
    const router = useRouter()
    const {$mijn} = useNuxtApp()

    const props = defineProps({
        code: {type: String, required: true},
        email: {type: String, required: true}
    })

    const confirmRecoveryForm = ref(null)
    const isPasswordVisible = ref(false)
    const isConfirmVisible = ref(false)
    let userPassword = ref('')
    let userPasswordConfirm = ref('')
    let message = ref('')
    let messageType = ref('')
    let hideInput = ref(false)
    let userEmail = ref('')

    const validationRules = {
        email: [
            v => !!v || 'E-mailadres is verplicht',
            v => /.+@.+/.test(v) || 'E-mailadres is incorrect',
        ],
        password: [
            v => !!v || 'Wachtwoord is verplicht',
            v => (v && v.length >= 6) || 'Wachtwoord moet minimaal 6 karakters hebben'
        ],
        confirmPassword: [
            v => !!v || 'Wachtwoord bevestigen is verplicht',
            v => (v && v == userPassword.value) || 'Wachtwoorden komen niet overeen.'
        ]
    }

    const isEmailDisabled = computed((): boolean => {
        return !!props.email
    })

    const gotoDashboard = (): void => {
        router.push({path: '/dashboard/inloggen/'})
    }

    const sendPasswordRecoveryConfirm = (): void => {
        confirmRecoveryForm.value.validate().then(res => {
            if (res.valid) {
                sendRequest()
            }
        })
    }

    const sendRequest = (): void => {
        $mijn.setNewPassword(
            {
                code: props.code,
                email: userEmail.value,
                new_password: userPassword.value,
                password_confirmation: userPasswordConfirm.value
            })
            .then((result: any) => {
                message.value = `Je wachtwoord voor je e-mail (${userEmail.value}) is succesvol hersteld.`
                messageType.value = 'success'
                hideInput.value = true
            }).catch((error: any) => {
            if (error.status === 400) {
                hideInput.value = true
                if (error._data.message_code === 'incorrect_code') {
                    messageType.value = 'error'
                    message.value = 'Het lijkt erop dat er iets fout gaat. Probeer het later opnieuw of neem contact met ons op (Chat, Telefoon of Whatsapp 035-6857888)'
                }
            }
        })
    }

    onMounted(() => {
        if (props.email) {
            userEmail.value = props.email
        }
    })
</script>
