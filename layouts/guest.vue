<template>
    <v-app id="quest-layout">
        <v-main>
            <v-container class="d-flex flex-column justify-center align-center">
                <v-row align="center" class="h-screen">
                    <v-card class="pa-4 pt-5 elevation-3" max-width="500" color="transparent">
                        <v-card-item>
                            <v-card-title>
                                <v-row>
                                    <v-col cols="10" offset="1">
                                        <img src="~/assets/images/vergelijkdirect-logo-blue.svg">
                                    </v-col>
                                </v-row>
                            </v-card-title>
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
</style>