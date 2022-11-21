<template>
    <v-card color="primary" variant="tonal">
        <template v-slot:text>
            <p class="text-h6 my-2">
                Geen contract beschikbaar..
            </p>
            Niet alle verzekeraars hebben een digitale koppeling met jouw account.
            Indien je snel je contract nodig hebt, kunnen we je dit uiteraard per <u style="cursor: pointer" @click="isContactsOpened = !isContactsOpened">e-mail of Whatsapp</u> toezenden.
            Uiteraard werken we er hard aan om je contract in de toekomst inzichtelijk te maken!
        </template>
    </v-card>
</template>
<script setup lang="ts">
    definePageMeta({
        middleware: 'auth'
    })

    const isContactsOpened = inject("isContactsOpened");
</script>