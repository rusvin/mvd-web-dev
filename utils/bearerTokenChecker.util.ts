const BearerKey = 'access_token'

export default () => {
    const token = useCookie(BearerKey).value

    if (!token) {
        return ''
    }

    return  token ? `Bearer ${token}` : ''
}