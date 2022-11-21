<template>
    <v-navigation-drawer
        v-model="isContactsOpened"
        location="right"
        width="400"
        disable-resize-watcher
        temporary
    >
        <v-toolbar color="primary">
            <v-toolbar-title>
                <v-icon>mdi-chat-question</v-icon>Hulp nodig?
            </v-toolbar-title>
            <v-btn icon="$close" @click.stop="isContactsOpened = false" />
        </v-toolbar>

        <v-container>
            <v-card
                v-for="contactInfo in contactsInformation"
                :key="contactInfo.title"
                :title="contactInfo.title"
                :prepend-icon="contactInfo.icon"
                color="primary"
                variant="tonal"
                class="mb-4"
            >
                <template v-slot:prepend>
                    <v-icon />
                </template>

                <v-card-text class="d-flex align-center">
                    <v-avatar v-if="contactInfo.type" class="mr-2" :color="$isSupportAvalible ? 'success' : 'error'" size="10" />
                     {{ $isSupportAvalible ? contactInfo.textOpen : contactInfo.textClosed }}
                </v-card-text>

                <v-card-actions v-if="contactInfo.button">
                    <v-spacer />
                    <v-btn
                        class="text-caption"
                        @click="contactInfo.buttonAction"
                        variant="outlined"
                        rounded
                    >{{ contactInfo.button }}</v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
const isContactsOpened = inject("isContactsOpened");
const contactsInformation = [
    {
        title: "Bellen (035-6857888)",
        icon: "mdi-phone",
        type: "phone",
        textOpen: "Wij zitten voor je klaar. Bel ons nu gerust op!",
        textClosed: "Helaas zijn wij telefonisch nu niet bereikbaar. Je kunt ons bellen op werkdagen tussen 09:00 en 18:00 uur!",
        button: "",
        buttonAction: ""
    },
    {
        title: "WhatsApp (035-6857888)",
        icon: "mdi-whatsapp",
        type: "chat",
        textOpen: "We zijn online. Je kunt nu met ons Whatsappen!!",
        textClosed: "Helaas is onze Whatsapp nu gesloten. Natuurlijk kun je wel gewoon een chat starten. We reageren op werkdagen tussen 09:00 en 18:00 uur altijd so snel mogelijk!",
        button: "Stuur een bericht",
        buttonAction: () => {
            window.open(
                "https://api.whatsapp.com/send?phone=31356857888",
                "_blank"
            );
        }
    },
    {
        title: "Chat",
        icon: "mdi-message",
        type: "chat",
        textOpen: "We zijn online. Je kunt nu met ons chatten!!",
        textClosed: "Helaas is onze chat nu gesloten. Natuurlijk kun je wel gewoon een chat starten. We reageren op werkdagen tussen 09:00 en 18:00 uur altijd so snel mogelijk!",
        button: "Open chat",
        buttonAction: () => {
            alert("The chat room is open");
        }
    },
    {
        title: "E-mail",
        icon: "mdi-email",
        type: "",
        textOpen: "Jex kunt ons altijd een e-mail sturen! We reageren op werkdagen binnen 24 uur (vaak sneller)!",
        textClosed: "Jex kunt ons altijd een e-mail sturen! We reageren op werkdagen binnen 24 uur (vaak sneller)!",
        button: "Stuur een bericht",
        buttonAction: () => {
            window.open("mailto:Klantenservice@vergelijkdirect.com", "_self");
        }
    }
];
</script>
