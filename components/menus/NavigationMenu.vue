<template>
    <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
            class="font-weight-medium text-lg-subtitle-1 text-md-subtitle-2"
            v-for="item in NavigationItems"
            :key="item.title"
            :to="item.path"
        >{{ item.title }}</v-btn>
    </v-toolbar-items>
</template>

<script setup lang="ts">
import { NavigationItems } from "~/models/navigation-items.model";
</script>
