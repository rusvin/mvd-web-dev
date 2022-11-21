<template>
    <v-card>
        <!-- Card header -->
        <v-toolbar title="Wachtwoord wijzigen" />

        <!-- Card Content -->
        <v-card-text>
            <v-form ref="resetPasswordForm" v-model="valid" @submit.prevent="setPassword">
                <v-alert
                    v-if="message"
                    class="mb-4"
                    variant="outlined"
                    prominent
                    :type="messageType"
                >{{ message }}</v-alert>

                <!-- Password -->
                <v-text-field
                    v-model.lazy="userPassword"
                    class="mb-4"
                    @click:append-inner="isPasswordVisible = !isPasswordVisible"
                    label="Kies je nieuwe wachtwoord"
                    name="password"
                    color="primary"
                    variant="outlined"
                    placeholder="Wachtwoord"
                    :append-inner-icon="isPasswordVisible ? 'mdi-lock-open' : 'mdi-lock'"
                    :type="isPasswordVisible ? 'text' : 'password'"
                    :rules="[useRules.required('Wachtwoord'), useRules.minLength(6, 'Wachtwoord')]"
                />

                <!-- Password confirm -->
                <v-text-field
                    v-model.lazy="userPasswordConfirm"
                    class="mb-4"
                    @click:append-inner="isConfirmVisible = !isConfirmVisible"
                    label="Nieuw wachtwoord bevestigen"
                    name="password-confirm"
                    color="primary"
                    variant="outlined"
                    placeholder="Wachtwoord bevestigen"
                    :append-inner-icon="isConfirmVisible ? 'mdi-lock-open' : 'mdi-lock'"
                    :type="isConfirmVisible ? 'text' : 'password'"
                    :rules="[useRules.required('Wachtwoord bevestigen'), useRules.confirmed(userPassword, 'Wachtwoorden')]"
                />

                <v-btn
                    block
                    size="x-large"
                    color="primary"
                    type="submit"
                    :disabled="!valid"
                >Wachtwoord wijzigen</v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
const { $mijn } = useNuxtApp();

const resetPasswordForm = ref(null);
const valid = ref(true);
const isPasswordVisible = ref(false);
const isConfirmVisible = ref(false);
const userPassword = ref("");
const userPasswordConfirm = ref("");

const message = ref("");
const messageType = ref("");

const setPassword = async () => {
    const { valid } = await resetPasswordForm.value.validate();

    if (valid) {
        try {
            await $mijn.setAuthPassword({
                password: userPassword.value,
                password_confirmation: userPasswordConfirm.value
            });

            message.value = "Zojuist is je wachtwoord gewijzigd. Onthoud je wachtwoord goed en deel deze niet met anderen.";
            messageType.value = "success";

            resetPasswordForm.value.reset();
            resetPasswordForm.value.resetValidation();
        } catch (error) {
            message.value =
                "Het lijkt erop dat er iets fout gaat. Probeer het later opnieuw of neem contact met ons op (Chat, Telefoon of Whatsapp 035-6857888)";
            messageType.value = "error";
        }
    }
};
</script>
