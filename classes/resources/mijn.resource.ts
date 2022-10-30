import { EnvironmentInterface } from '../interfaces/index'
import JWTAuthResource from "./JWTAuth.resource";
import { ResponseHandler, ErrorHandler } from '../handlers'

class MijnResource extends JWTAuthResource {
    constructor(token: string) {
        super(token)
    }

    protected getBaseUrl(env: EnvironmentInterface): string {
        return env.mijn.baseUrl;
    }

    public requestPasswordReset(data: { email: string }): Promise<any> {
        return this.apiFetch('/password/reset', {
            method: 'post',
            body: data,
        })
        .then((r) => new ResponseHandler(r))
        .catch((e) => new ErrorHandler(e))
    }

    public setNewPassword(data: { code: string; email: string; new_password: string; password_confirmation: string }): Promise<any> {
        return this.apiFetch('/password/reset', {
            method: 'put',
            body: data,
        })
            .then((r) => new ResponseHandler(r))
            .catch((e) => new ErrorHandler(e))
    }

    public registerUser(data: { name: string; email: string; phone_number: string }): Promise<any> {
        return this.apiFetch('/auth/registration', {
            method: 'post',
            body: data,
        })
            .then((r) => new ResponseHandler(r))
            .catch((e) => new ErrorHandler(e))
    }

    public setNewJWTToken(token: string): void {
        this.setJWTToken(token)
    }

    public verifyUserByHash(data: { hash: string }): Promise<any> {
        return this.apiFetch('/auth/verify', {
            method: 'post',
            body: data
        })
            .then((r) => new ResponseHandler(r))
            .catch((e) => new ErrorHandler(e))
    }

    public loginAs(data: { public_id: string; token: string}) {
        return this.apiFetch(`/auth/login_as/${data.public_id}`, {
            method: 'post',
            body: {
                token: data.token
            },
        })
            .then((r) => new ResponseHandler(r))
            .catch((e) => new ErrorHandler(e))
    }

    public logout(): Promise<any> {
        return this.apiFetch('/auth/logout', {
            method: 'post'
        })
            .then((r) => new ResponseHandler(r))
            .catch((e) => new ErrorHandler(e))
    }

    public getUserData(): Promise<any> {
        return this.apiFetch('/user/data', {
            method: 'get',
        })
            .then((r) => new ResponseHandler(r))
            .catch((e) => new ErrorHandler(e))
    }
}

export default MijnResource
