<template>
    <v-btn icon @click.stop="isContactsOpened = !isContactsOpened">
        <v-badge :color="$isSupportAvalible ? 'success' : 'error'" dot>
            <v-icon>mdi-chat-question</v-icon>
        </v-badge>
    </v-btn>
</template>

<script setup lang="ts">
const isContactsOpened = inject("isContactsOpened");
</script>