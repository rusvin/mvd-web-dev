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

    public getHouseData(data: { Zipcode: string; HouseNumber: string; HouseNumberAddition: string }) {
        return this.apiFetch('/v1/zipcode/validate', {
            method: 'post',
            body: data,
        })
        .then((r) => new ResponseHandler(r))
        .catch((e) => new ErrorHandler(e))
    }

    public getHouseDataAdditions(data: { zipcode: string; houseNumber: string; }) {
        return this.apiFetch('/v2/categories/home/risk/addition', {
            method: 'post',
            body: data,
        })
        .then((r) => new ResponseHandler(r))
        .catch((e) => new ErrorHandler(e))
    }
}

export default ApiResource