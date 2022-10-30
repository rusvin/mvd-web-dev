import BaseAuthResource from './baseAuth.resource'
import { EnvironmentInterface } from '../interfaces'
import { ResponseHandler, ErrorHandler } from '../handlers'

class ApiResource extends BaseAuthResource {
    protected getBaseUrl(env: EnvironmentInterface): string {
        return env.api.baseUrl;
    }

    public validateEmail(data: { email: string }): Promise<any> {
        return this.apiFetch('/v1/address/validate', {
            method: 'post',
            body: data,
        })
        .then((r) => new ResponseHandler(r))
        .catch((e) => new ErrorHandler(e))
    }
}

export default ApiResource