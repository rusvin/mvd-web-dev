<template>
    <v-sheet class="mx-auto" max-width="1000">
        <div class="mb-12">
            <h1 class="text-h4 mb-5">Mijn gegevens</h1>
            <v-divider />
            <v-card class="mt-4" color="primary" variant="tonal">
                <template v-slot:text>
                    <p class="text-h6 my-2">
                        Gegevens aanpassen?
                    </p>
                    Helaas is het tijdelijk niet mogelijk om je gegevens aan te passen. We kunnen dit uiteraard per <u style="cursor: pointer" @click="isContactsOpened = !isContactsOpened">e-mail of Whatsapp</u> wel voor je doen!
                </template>
            </v-card>
        </div>

        <profile-basic-data />
    </v-sheet>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: "auth"
});

fetchProfileData();
const isContactsOpened = inject("isContactsOpened");
</script>
