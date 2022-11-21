import { availabilityChecker } from '~/utils/availabilityChecker.utils'

export default defineNuxtPlugin(() => {
    return {
        provide: {
            isSupportAvalible: availabilityChecker()
        }
    }
})