<template>
    <v-app>
        <default-drawer />

        <default-contacts />

        <default-header />

        <default-view />

        <default-bottom-navigation />
    </v-app>
</template>

<script setup lang="ts">
import DefaultHeader from "./default/DefaultHeader.vue";
import DefaultView from "./default/DefaultView.vue";
import DefaultDrawer from "./default/DefaultDrawer.vue";
import DefaultContacts from "./default/DefaultContacts.vue";
import DefaultBottomNavigation from "./default/DefaultBottomNavigation.vue";

await fetchProfileData()

const isContactsOpened = ref(false);
const setContacts = (value: boolean) => (isContactsOpened.value = value);

provide(
    "isContactsOpened",
    computed({
        get: () => isContactsOpened.value,
        set: setContacts
    })
);

const isDrawerOpened = ref(false);
const setDrawer = (value: boolean) => (isDrawerOpened.value = value);

provide(
    "isDrawerOpened",
    computed({
        get: () => isDrawerOpened.value,
        set: setDrawer
    })
);
</script>
