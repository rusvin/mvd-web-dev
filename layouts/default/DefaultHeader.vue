<template>
    <v-app-bar color="primary" app>
        <template v-slot:prepend>
            <v-app-bar-nav-icon
                class="hidden-md-and-up"
                @click.stop="isDrawerOpened = !isDrawerOpened"
            />

            <logo v-if="$vuetify.display.smAndUp" />

            <v-divider vertical v-if="$vuetify.display.mdAndUp" class="mx-2" />

            <menus-navigation-menu />
        </template>

        <logo-mobile v-if="$vuetify.display.xs" />

        <template v-slot:append>
            <v-divider vertical v-if="$vuetify.display.mdAndUp" class="mx-2" />

            <menus-contacts-menu v-if="$vuetify.display.smAndUp" />
            <menus-notifications-menu />
            <menus-account-menu v-if="$vuetify.display.smAndUp" />
        </template>
    </v-app-bar>
</template>

<script setup lang="ts">
const isDrawerOpened = inject("isDrawerOpened");
</script>