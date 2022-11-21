<template>
    <div>
        <!-- Basic personal data -->
        <v-card class="mb-5">
            <!-- Card Header -->
            <v-toolbar title="Persoongegevens">
                <!-- <template v-slot:append>
                    <v-tooltip text="Wijzigen">
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props" icon="mdi-pencil" @click="isOpened = true" />
                        </template>
                    </v-tooltip>
                </template> -->
            </v-toolbar>

            <!-- Card Content -->
            <v-card-text>
                <!-- Initials -->
                <v-list-item class="pa-0 mb-2" title="Initials" :subtitle="getInitials">
                    <v-divider class="mt-2" insert />
                </v-list-item>

                <!-- First name -->
                <v-list-item
                    class="pa-0 mb-2"
                    title="Voornaam"
                    :subtitle="userData.user.name || '&mdash;'"
                >
                    <v-divider class="mt-2" insert />
                </v-list-item>

                <!-- Infix -->
                <v-list-item
                    class="pa-0 mb-2"
                    title="Tussenvoegsel"
                    :subtitle="userData.user.nameInfix || '&mdash;'"
                >
                    <v-divider class="mt-2" insert />
                </v-list-item>

                <!-- Last name -->
                <v-list-item
                    class="pa-0 mb-2"
                    title="Achternaam"
                    :subtitle="userData.user.lastName || '&mdash;'"
                >
                    <v-divider class="mt-2" insert />
                </v-list-item>

                <!-- Birthdate -->
                <v-list-item
                    class="pa-0 mb-2"
                    title="Geboortedatum"
                    :subtitle="userData.user.birthDate || '&mdash;'"
                >
                    <v-divider class="mt-2" insert />
                </v-list-item>

                <!-- Gender -->
                <v-list-item class="pa-0" title="Geslacht">
                    <v-list-item-subtitle
                        class="d-flex align-center"
                        v-if="userData.user.sex === 'm'"
                    >
                        <v-icon icon="mdi-gender-male" />Man
                    </v-list-item-subtitle>
                    <v-list-item-subtitle
                        class="d-flex align-center"
                        v-else-if="userData.user.sex === 'f'"
                    >
                        <v-icon icon="mdi-gender-female" />Vrouw
                    </v-list-item-subtitle>
                    <v-list-item-subtitle class="d-flex align-center" v-else>&mdash;</v-list-item-subtitle>
                </v-list-item>
            </v-card-text>
        </v-card>

        <!-- Dialog for editing basic personal data -->
        <v-dialog v-model="isOpened" max-width="500">
            <v-card title="Wijzigen Persoongegevens">
                <template v-slot:append>
                    <v-btn icon="mdi-close" variant="text" @click="isOpened = false"/>
                </template>
                <v-card-text>
                    <v-col>
                        <profile-basic-personal-data-form />
                    </v-col>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup lang="ts">
const userData = useUserData();

const isOpened = ref(false);

const getInitials = computed(() =>
    `${userData.value.user.name[0]}${userData.value.user.lastName?.[0] ?? ""}`
        .trim()
        .toLocaleUpperCase()
);
</script>