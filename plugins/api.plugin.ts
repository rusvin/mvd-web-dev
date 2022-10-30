import { MijnService, ApiService } from '~/classes/services'
import BearerTokenGetter from '../utils/bearerTokenChecker.util'

export default defineNuxtPlugin(nuxtApp => {
    let BearerToken = BearerTokenGetter()

    return {
        provide: {
            mijn: new MijnService(BearerToken),
            api: new ApiService(),
        }
    }
})