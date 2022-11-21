<template>
    <v-bottom-navigation v-if="$vuetify.display.xs" bg-color="primary" height="80" grow app>
        <v-btn to="/dashboard/contracten/">
            <v-icon size="24">mdi-text-box-multiple-outline</v-icon>Contracten
        </v-btn>

        <v-btn icon @click.stop="isContactsOpened = !isContactsOpened">
            <v-badge :color="$isSupportAvalible ? 'success' : 'error'" dot floating>
                <v-icon size="24">mdi-chat-question</v-icon>
            </v-badge>Hulp nodig?
        </v-btn>
    </v-bottom-navigation>
</template>

<script setup lang="ts">
const isContactsOpened = inject("isContactsOpened");
</script>