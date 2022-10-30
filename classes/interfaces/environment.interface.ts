interface EnvironmentInterface {
    api: {
        baseUrl: string
        auth: {
            username: string,
            password: string
        },
        version: string
    },
    mijn: {
        baseUrl: string
    }
}

export default EnvironmentInterface