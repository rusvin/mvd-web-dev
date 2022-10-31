<template>
    <v-app id="quest-layout">
        <v-main>
            <v-row align="center" class="h-screen justify-center ">
                <v-card class="pa-4 pt-5 elevation-3 w-100" max-width="500" color="transparent">
                    <v-card-item class="text-center">
                        <img src="~/assets/images/vergelijkdirect-logo-blue.svg" id="quest-logo">
                    </v-card-item>
                    <slot/>
                </v-card>
            </v-row>
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