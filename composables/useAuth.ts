import {useRouter} from "#app";
import {EnvConfig} from '~/config';
import {EnvironmentInterface} from "~/classes/interfaces";

const env: EnvironmentInterface = EnvConfig

export function isAuthorized(): boolean {
    const token = useCookie('access_token')

    return !!token.value
}

export function setToken(token: string, expiresIn: number): void {
    const accessCookie = useCookie('access_token', {maxAge: expiresIn * 60})

    accessCookie.value = token
}

export function logout(): void {
    const token = useCookie('access_token')
    token.value = null

    //TODO mijn logout
}

export async function login(email: string, password: string): Promise<boolean> {
    try {
        const res = await $fetch(`${env.mijn.baseUrl}/auth/login`, {
            method: 'POST',
            body: {email: email, password: password}
        })

        setToken(res.access_token, res.expires_in)

        useRouter().push('/dashboard/contracten')
        return true
    } catch (e) {
        console.error(e)
        return false
    }
}