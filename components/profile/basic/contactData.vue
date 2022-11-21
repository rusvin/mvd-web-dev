<template>
    <div>
        <!-- Contact data -->
        <v-card>
            <!-- Card header -->
            <v-toolbar title="Contractgegevens">
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
                <!-- Email -->
                <v-list-item class="pa-0 mb-2" title="E-mailadres" :subtitle="userData.user.email">
                    <v-divider class="mt-2" insert />
                </v-list-item>

                <!-- Phone Number -->
                <v-list-item
                    class="pa-0 mb-2"
                    title="Mobiele telefoonnummer"
                    :subtitle="userData.user.phoneNumber"
                >
                    <v-divider class="mt-2" insert />
                </v-list-item>

                <!-- Address -->
                <v-list-item class="pa-0" title="Adres" :subtitle="getAddressString || '&mdash;'" />
            </v-card-text>
        </v-card>
        <!-- Dialog for editing contact data -->
        <v-dialog v-model="isOpened" max-width="500">
            <v-card title="Wijzigen Contractgegevens">
                <template v-slot:append>
                    <v-btn icon="mdi-close" variant="text" @click="isOpened = false" />
                </template>
                <v-card-text>
                    <v-col>
                        <profile-basic-contact-data-form />
                    </v-col>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup lang="ts">
const userData = useUserData();

const isOpened = ref(false);

const getAddressString = computed((): string => {
    const {
        street,
        houseNumber,
        houseNumberAddition,
        zipcode,
        city
    } = userData.value.user;

    return [street, houseNumber, houseNumberAddition, zipcode, city]
        .filter((val: string | null) => val)
        .join(", ");
});
</script>