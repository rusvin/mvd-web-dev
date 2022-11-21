<template>
    <v-sheet class="mx-auto" max-width="1000">
        <div class="mb-12">
            <h1 class="text-h4 mb-5">Instellingen</h1>
            <v-divider />
        </div>

        <settings-password-reset />
    </v-sheet>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: "auth"
});
</script>
