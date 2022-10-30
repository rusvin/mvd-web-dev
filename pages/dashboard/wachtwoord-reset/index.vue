<template>
    <send-email v-if="!canPasswordRecovery"/>
    <confirm-password v-else :email="recoveryEmail" :code="recoveryCode"/>
</template>

<script setup lang="ts">
    import confirmPassword from '~~/components/password-recovery/confirmPassword.vue';
    import sendEmail from '~~/components/password-recovery/sendEmail.vue';

    let recoveryCode = ref('')
    let recoveryEmail = ref('')
    let canPasswordRecovery = ref(false)
    const route = useRoute()

    definePageMeta({
        middleware: 'guest',
        layout: 'guest'
    })

    const getCodeFromUrl = () => {
        const QueryParams: any = route.query

        if (Object.keys(QueryParams).length === 0) {
            return
        }

        if (QueryParams.email) {
            recoveryEmail.value = QueryParams.email
        }

        if (QueryParams.code) {
            canPasswordRecovery.value = true
            recoveryCode.value = QueryParams.code
        }
    }

    onMounted(() => {
        getCodeFromUrl()
    })
</script>

<style lang="scss">
    .auth-wrapper {
        min-block-size: calc(var(--vh, 1vh) * 100);
    }

    .auth-card {
        z-index: 1 !important;
    }
</style>