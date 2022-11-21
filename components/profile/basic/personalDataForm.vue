<template>
    <v-form ref="personalDataForm" @submit.prevent="savePersonalDataForm" lazy-validation>
        <!-- First name -->
        <v-text-field
            v-model="personalData.name"
            class="mb-4"
            label="Voornaam"
            name="name"
            color="primary"
            variant="outlined"
            :rules="[useRules.required('Voornaam')]"
        />

        <!-- Infix -->
        <v-text-field
            v-model="personalData.nameInfix"
            class="mb-4"
            label="Tussenvoegsel"
            name="infix"
            color="primary"
            variant="outlined"
        />

        <!-- Last name -->
        <v-text-field
            v-model="personalData.lastName"
            class="mb-4"
            label="Achternaam"
            name="lastname"
            color="primary"
            variant="outlined"
            :rules="[useRules.required('Achternaam')]"
        />

        <!-- Birthdate -->
        <v-text-field
            v-model="personalData.birthDate"
            class="mb-4"
            label="Geboortedatum"
            name="birthdate"
            type="date"
            color="primary"
            variant="outlined"
            :max="maxBirthDate"
            :rules="[useRules.required('Geboortedatum')]"
        />

        <!-- Gender -->
        <v-radio-group
            v-model="personalData.sex"
            class="mb-4"
            label="Geslacht"
            name="gener"
            color="primary"
            inline
            :rules="[useRules.required('Geslacht')]"
        >
            <v-radio label="Man" value="m" />
            <v-radio label="Vrouw" value="f" />
        </v-radio-group>

        <v-btn color="success" type="submit" size="x-large" block>Opslaan</v-btn>
    </v-form>
</template>

<script setup lang="ts">
const { $mijn, $api } = useNuxtApp();

const userData = useUserData().value;

const { name, nameInfix, lastName, birthDate, sex } = userData.user;
const personalData = ref({ name, nameInfix, lastName, birthDate, sex });

const personalDataForm = ref(null);

const maxBirthDate = computed((): string => {
    const currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - 16);

    return currentDate.toLocaleDateString("en-ca");
});

const savePersonalDataForm = async () => {
    const { valid } = await personalDataForm.value.validate();

    if (valid) {
        try {
            await $mijn.saveUserData(personalData.value, userData.user.id);
            fetchProfileData();
        } catch (error) {
            // TODO Status
        }
    }
};
</script>
