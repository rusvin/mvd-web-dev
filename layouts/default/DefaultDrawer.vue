<template>
    <v-navigation-drawer v-model="isDrawerOpened" app temporary>
        <v-list class="bg-blue rounded-be-xl">
            <v-list-item>
                <logo-mobile />
            </v-list-item>
            <v-list-item title="Test Testovich" subtitle="test@email.com" />
        </v-list>

        <v-list active-color="primary" nav>
            <v-list-subheader title="Navigation" />
            <v-list-item
                v-for="item in NavigationItems"
                :key="item.title"
                :title="item.title"
                :to="item.path"
                rounded="xl"
            />

            <div v-if="$vuetify.display.xs">
                <v-list-subheader title="Account" />
                <v-list-item
                    v-for="item in AccountItems"
                    :key="item.title"
                    :title="item.title"
                    :to="item.path"
                    :prepend-icon="item.icon"
                    rounded="xl"
                />
            </div>
        </v-list>

        <v-divider />

        <template v-if="$vuetify.display.xs" v-slot:append>
            <div class="pa-2">
                <v-btn @click="userLogout" variant="plain" block>Uitloggen</v-btn>
            </div>
        </template>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import { NavigationItems } from "~/models/navigation-items.model";
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