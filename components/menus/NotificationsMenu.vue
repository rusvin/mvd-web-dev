<template>
    <v-menu :close-on-content-click="false">
        <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props">
                <v-badge v-model="unread" color="error" dot>
                    <v-icon>mdi-bell-ring</v-icon>
                </v-badge>
            </v-btn>
        </template>

        <v-card max-width="400" max-height="400" title="Jouw berichten">
            <v-divider />

            <v-list v-if="false" lines="two">
                <div v-for="n in 6" :key="n">
                    <v-list-item @click="() => {}" :title="`Message ${n}`">
                        <v-list-item-subtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error inventore tempora enim ipsam. Assumenda cum quidem nesciunt unde quisquam, doloribus dolorem expedita deserunt qui quis exercitationem accusamus quo. Incidunt, modi?</v-list-item-subtitle>
                    </v-list-item>

                    <v-divider v-if="n !== 6" />
                </div>
            </v-list>

            <v-card-text v-else class="text-center">
                <p>Je hebt nog geen berichten ontvangen</p>
                <v-icon color="grey lighten-2" size="96" icon="mdi-email-check-outline" />
            </v-card-text>

            <v-divider />

            <v-card-actions>
                <v-btn to="/dashboard/berichten/" variant="plain" block>Open berichtencentrum</v-btn>
            </v-card-actions>
        </v-card>
    </v-menu>
</template>

<script setup lang="ts">
const unread = ref(false);
</script>