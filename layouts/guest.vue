<template>
    <v-app id="quest-layout">
        <v-main>
            <v-container class="d-flex flex-column justify-center align-center">
                <v-row align="center" class="h-screen">
                    <v-card class="pa-4 pt-5 elevation-3" max-width="500" color="transparent">
                        <v-card-item>
                            <v-row>
                                <v-col cols="12" class="text-center">
                                    <img src="~/assets/images/vergelijkdirect-logo-blue.svg" id="quest-logo">
                                </v-col>
                            </v-row>
                        </v-card-item>
                        <slot/>
                    </v-card>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<style lang="scss">
    #quest-layout {
        background: url(~/assets/images/bubbles.svg);
        background-size: cover;
        position: relative;
        background-position: 100%;
    }
    #quest-logo {
        max-width: 250px;
    }
</style>