<template>
    <v-menu>
        <template v-slot:activator="{ props }">
            <v-btn icon="mdi-account" v-bind="props" />
        </template>

        <v-card min-width="300" title="Test Testovich" subtitle="test@email.com">
            <v-divider />

            <v-list active-color="primary" nav>
                <v-list-item
                    v-for="item in AccountItems"
                    :key="item.title"
                    :title="item.title"
                    :to="item.path"
                    :prepend-icon="item.icon"
                    rounded="xl"
                />
            </v-list>

            <v-divider />

            <v-card-actions>
                <v-btn @click="userLogout" variant="plain" block>Uitloggen</v-btn>
            </v-card-actions>
        </v-card>
    </v-menu>
</template>

<script setup lang="ts">
import { AccountItems } from "~/models/account-items.model";
import { logout } from "~/composables/useAuth";

const isDrawerOpened = inject("isDrawerOpened");
const { $mijn } = useNuxtApp();
const router = useRouter();

const userLogout = (): void => {
    $mijn.logout();
    logout();
    router.push({ path: "/dashboard/inloggen/" });
};
</script>
