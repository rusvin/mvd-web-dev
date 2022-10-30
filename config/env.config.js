import env from '../environment/environment'

export default {
    api: {
        baseUrl: `${env.api.url}/api`,
        auth: {
            username: env.api.login,
            password: env.api.password
        },
        version: ''
    },
    mijn: {
        baseUrl: `${env.mijn.url}/api`
    }
}