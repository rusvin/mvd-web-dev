<template>
    <div>
        <v-row>
            <v-col cols="12">
                <v-card color="primary">
                    <template v-slot:text>
                        <p class="text-h6 my-2">
                            Hi {{userData.user.name}}
                        </p>
                        Zoek je een nieuw sim only abonnement of een nieuw abonnement met een toestel? Bekijk dan onze handige
                        vergelijkers en vind de beste deal voor jou!
                    </template>
                </v-card>
            </v-col>

            <v-col cols="12" sm="4">
                <v-card color="primary" variant="tonal">
                    <template v-slot:text>
                        <p class="text-h6 my-2">
                            <v-icon icon="mdi-sim" color="primary" size="small"/> Sim only
                        </p>
                        Heb je zelf al een mooi toestel en wil je gewoon de goedkoopste sim only deal? Wij vinden 'm!
                    </template>
                    <v-card-actions>
                        <v-btn color="success" variant="flat" :to="'/dashboard/vergelijken/telecom/sim-only/'">
                            Start vergelijken
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="12" sm="4">
                <v-card color="primary" variant="tonal">
                    <template v-slot:text>
                        <p class="text-h6 my-2">
                            <v-icon icon="mdi-cellphone" color="primary" size="small"/>
                            <v-icon icon="mdi-plus" color="primary" size="small"/>
                            <v-icon icon="mdi-file-document" color="primary" size="small"/>
                            Toestel + Abonnement
                        </p>
                        Zoek je een nieuw sim only abonnement of een nieuw abonnement met een toestel? Bekijk dan onze handige
                        vergelijkers en vind de beste deal voor jou!
                    </template>
                    <v-card-actions>
                        <v-btn color="success" variant="flat" :to="'/dashboard/vergelijken/telecom/toestel-abonnement/'">
                            Start vergelijken
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="12" sm="4">
                <v-card color="primary" variant="tonal">
                    <template v-slot:text>
                        <p class="text-h6 my-2">
                            <v-icon icon="mdi-cellphone" color="primary" size="small"/> Check de nieuwste toestellen
                        </p>
                        Zoek je een nieuw sim only abonnement of een nieuw abonnement met een toestel? Bekijk dan onze handige
                        vergelijkers en vind de beste deal voor jou!
                    </template>
                    <v-card-actions>
                        <v-btn color="success" variant="flat" :to="'/dashboard/vergelijken/telecom/toestel/'">
                            Bekijk de nieuwste modellen
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script setup lang="ts">
    definePageMeta({
        middleware: 'auth'
    })

    const userData = useUserData();
</script>