<template>
    <div>
        <third-party-comparing-tools :insurance="comparisonTool"/>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
        middleware: 'auth'
    })

    const comparisonTool = 'toestel-abonnement'
</script>