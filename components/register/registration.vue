<template>
    <div>
        <v-card-text>
            <h1 class="text-center">Aanmelden</h1>
        </v-card-text>
        <v-card-text v-if="message">
            <v-alert :type="messageType" variant="tonal" :icon="messageIcon">
                {{ message }}
            </v-alert>
        </v-card-text>
        <v-card-text>
            <v-form ref="registerForm" @submit.prevent="registerUser" lazy-validation>
                <v-row v-if="!success">
                    <v-col cols="12">
                        <v-text-field
                                label="Voornaam"
                                placeholder="Voornaam"
                                id="name"
                                type="text"
                                name="name"
                                v-model.lazy="userName"
                                :rules="validationRules.name"
                                color="blue"
                                variant="outlined"
                        />
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                                label="E-mailadres"
                                placeholder="gebruiker@email.nl"
                                id="email-adres"
                                type="email"
                                name="email"
                                @change="validateEmail"
                                v-model.lazy="userEmail"
                                :rules="validationRules.email"
                                color="blue"
                                variant="outlined"
                        />
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                                label="Mobiele telefoonnummer"
                                placeholder="0612345678"
                                id="phonenumber"
                                type="text"
                                name="phonenumber"
                                maxlength="10"
                                v-model.lazy="userPhoneNumber"
                                :rules="validationRules.phone"
                                color="blue"
                                variant="outlined"
                        />
                    </v-col>
                    <v-col cols="12">
                        <v-btn color="blue" block @click="registerUser" :disabled="!isEmailValid">
                            Aanmelden
                        </v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
    </div>
</template>

<script setup lang="ts">
    const {$mijn, $api} = useNuxtApp()

    const registerForm = ref(null)
    let userName = ref('')
    let userEmail = ref('')
    let userPhoneNumber = ref('')
    let message = ref('')
    let messageType = ref('')
    let messageIcon = ref('')
    let success = ref(false)
    let isEmailValid = ref(true)

    const validationRules = {
        name: [v => !!v || 'Voornaam is verplicht'],
        email: [
            v => !!v || 'E-mailadres is verplicht',
            v => /.+@.+/.test(v) || 'E-mailadres is incorrect',
            v => (v && isEmailValid.value) || 'Dit e-mailadres is onjuist',
        ],
        phone: [
            v => !!v || 'Mobiele telefoonnummer is verplicht',
            v => /^((06){1}[1-9]{1}[0-9]{7})$/.test(v) || 'Mobiele telefoonnummer is incorrect'
        ]
    }

    const registerUser = (): void => {
        registerForm.value.validate().then(res => {
            if (res.valid) {
                sendRequest()
            }
        })
    }

    const sendRequest = (): void => {
        $mijn.registerUser(
            {
                name: userName.value,
                email: userEmail.value,
                phone_number: userPhoneNumber.value
            }
        ).then(() => {
            message.value = `Bekijk je e-mail (${userEmail.value}) en klik op de activatielink om je account te activeren.`
            messageType.value = 'success'
            messageIcon.value = 'mdi-check-circle-outline'
            success.value = true
        }).catch((err: any) => {
            if (err.status === 422) {
                messageType.value = 'info'
                messageIcon.value = 'mdi-information-outline'
                message.value = 'Dit account is al een keer aangemeld.'
            } else {
                messageType.value = 'error'
                messageIcon.value = 'mdi-close-circle-outline'
                message.value = 'Het lijkt erop dat er iets fout gaat. Probeer het later opnieuw of neem contact met ons op (Chat, Telefoon of Whatsapp 035-6857888)'
            }
        })
    }

    const validateEmail = (): void => {
        $api.validateEmail({email: userEmail.value}).then((res: any) => isEmailValid.value = res.valid)
    }
</script>
