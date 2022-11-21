<template>
    <v-sheet class="mx-auto" max-width="1000">
        <div class="mb-12">
            <h1 class="text-h4 mb-5">Berichten</h1>
            <v-divider />
        </div>

        Je hebt nog geen berichten ontvangen
    </v-sheet>
</template>

<script lang="ts">
definePageMeta({
    middleware: "auth"
});
</script>
