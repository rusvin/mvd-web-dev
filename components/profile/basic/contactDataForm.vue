<template>
    <v-form ref="contactDataForm" @submit.prevent="saveContactDataForm">
        <!-- Email -->
        <v-text-field
            v-model="contactData.email"
            class="mb-4"
            label="E-mailadres"
            name="email"
            type="email"
            color="primary"
            variant="outlined"
            :rules="[useRules.required('E-mailadres'), useRules.email]"
            disabled
        />

        <!-- Phonenumber -->
        <v-text-field
            v-model="contactData.phoneNumber"
            class="mb-4"
            label="Mobiele telefoonnummer"
            name="phonenumber"
            color="primary"
            variant="outlined"
            :rules="[useRules.required('Mobiele telefoonnummer'), useRules.phoneNumber]"
        />

        <!-- Zipcode -->
        <v-text-field
            v-model.lazy="contactData.zipcode"
            @change="getHouseData"
            class="mb-4"
            label="Postcode"
            name="zipcode"
            color="primary"
            variant="outlined"
            maxlength="6"
            :rules="[useRules.required('Postcode')]"
            :error-messages="addressErrorMessage"
        />

        <!-- Housenumber -->
        <v-text-field
            v-model.lazy="contactData.houseNumber"
            @change="getHouseData"
            class="mb-4"
            label="Huisnummer"
            name="housenumber"
            color="primary"
            variant="outlined"
            :rules="[useRules.required('Huisnummer')]"
            :error-messages="addressErrorMessage"
        />

        <!-- HouseNumberAddition -->
        <v-text-field
            v-model.lazy="contactData.houseNumberAddition"
            @change="getHouseData"
            class="mb-4"
            label="Toevoeging"
            name="housenumberaddition"
            color="primary"
            variant="outlined"
            :error-messages="addressErrorMessage"
        />

        <!-- Streetname -->
        <v-text-field
            v-model="contactData.street"
            class="mb-4"
            label="Straatnaam"
            name="street"
            color="primary"
            variant="outlined"
            disabled
        />

        <!-- City -->
        <v-text-field
            v-model="contactData.city"
            class="mb-4"
            label="Plaats"
            name="city"
            color="primary"
            variant="outlined"
            disabled
        />

        <v-btn color="success" type="submit" size="x-large" block>Opslaan</v-btn>
    </v-form>
</template>

<script setup lang="ts">
const { $mijn, $api } = useNuxtApp();

const userData = useUserData().value;

const {
    email,
    phoneNumber,
    street,
    houseNumber,
    houseNumberAddition,
    zipcode,
    city
} = userData.user;
const contactData = ref({
    email,
    phoneNumber,
    street,
    houseNumber,
    houseNumberAddition,
    zipcode,
    city
});

const contactDataForm = ref(null);
const addressErrorMessage = ref("");

const getHouseData = async () => {
    if (contactData.value.houseNumber && contactData.value.zipcode) {
        try {
            const res = await $api.getHouseData({
                Zipcode: contactData.value.zipcode,
                HouseNumber: contactData.value.houseNumber,
                HouseNumberAddition: contactData.value.houseNumberAddition
            });

            addressErrorMessage.value = "";
            contactData.value.street = res.Street;
            contactData.value.city = res.Place;
        } catch (error) {
            addressErrorMessage.value =
                "Postcode + huisnummer combinatie is incorrect";
            contactData.value.street = "";
            contactData.value.city = "";
        }
    }
};

const getHouseDataAdditions = async () => {
    const { zipcode, houseNumber } = contactData.value.zipcode;
    const res = await $api.getHouseDataAdditions({ zipcode, houseNumber });
};

const saveContactDataForm = async () => {
    const { valid } = await contactDataForm.value.validate();

    if (valid) {
        await $mijn.savecontactData(contactData.value, userData.user.id);
        fetchProfileData();
    }
};
</script>
