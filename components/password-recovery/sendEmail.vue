<template>
    <div>
        <v-card-text>
            <h1 class="text-center">Wachtwoord herstellen</h1>
            <br>
            <p class="text-center">
                We sturen je direct een e-mail waarmee je je wachtwoord opnieuw kunt instellen.
            </p>
        </v-card-text>
        <v-card-text v-if="message">
            <v-alert :type="messageType" variant="tonal" :icon="messageIcon">
                {{ message }}
            </v-alert>
        </v-card-text>
        <v-card-text>
            <v-form ref="sendRecoveryForm" @submit.prevent="sendPasswordRecoveryEmail" lazy-validation>
                <v-row>
                    <v-col cols="12" v-if="!hideInput">
                        <v-text-field
                                label="E-mailadres"
                                id="email-adres"
                                type="email"
                                name="email"
                                color="blue"
                                :rules="emailRules"
                                v-model="userEmail"
                                @keyup.enter="sendPasswordRecoveryEmail"
                                variant="outlined"
                        />
                    </v-col>
                    <v-col cols="12" v-if="!hideInput">
                        <v-btn block size="large" color="blue" @click="sendPasswordRecoveryEmail">
                            Verstuur e-mail
                        </v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
    </div>
</template>

<script setup lang="ts">
    const {$mijn} = useNuxtApp()
    const sendRecoveryForm = ref(null);
    const userEmail = ref(null)
    let message = ref('')
    let messageType = ref('')
    let messageIcon = ref('')
    let hideInput = ref(false)
    const emailRules = [
        v => !!v || 'E-mailadres is verplicht',
        v => /.+@.+/.test(v) || 'E-mailadres is incorrect',
    ]

    const sendPasswordRecoveryEmail = () => {
        sendRecoveryForm.value.validate().then(res => {
            if (res.valid) {
                $mijn.requestPasswordReset(
                    {
                        email: userEmail.value
                    }
                ).then(() => {
                    message.value = `Bekijk je e-mail (${userEmail.value}) en klik op de herstel-link om je wachtwoord te herstellen`
                    messageType.value = 'success'
                    messageIcon.value = 'mdi-check-circle-outline'
                    hideInput.value = true
                }).catch((error: any) => {
                    if (error.status === 400) {
                        if (error._data.message_code === 'incorrect_email') {
                            message.value = 'We kunnen dit e-mailadres niet vinden. Probeer een ander e-mailadres.'
                            messageType.value = 'error'
                            messageIcon.value = 'mdi-close-circle-outline'
                        } else if (error._data.message_code === 'changing_password_requested') {
                            messageType.value = 'info'
                            messageIcon.value = 'mdi-information-outline'
                            message.value = `Met dit e-mailadres heb je al geprobeerd je wachtwoord te herstellen. Bekijk je e-mail (${userEmail.value}) en klik op de herstel-link om je wachtwoord te herstellen`
                            hideInput.value = true
                        } else {
                            messageType.value = 'error'
                            messageIcon.value = 'mdi-close-circle-outline'
                            message.value = 'Het lijkt erop dat er iets fout gaat. Probeer het later opnieuw of neem contact met ons op (Chat, Telefoon of Whatsapp 035-6857888)'
                        }
                    }
                })
            }
        })
    }
</script>