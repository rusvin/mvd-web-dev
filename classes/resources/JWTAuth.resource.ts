import { $fetch, $Fetch, FetchOptions } from 'ohmyfetch'
import { EnvironmentInterface } from '../interfaces';
import { EnvConfig } from '~/config';

abstract class JWTAuthResource {

    protected apiFetch: $Fetch;
    protected token: string | boolean

    public constructor(token: string | boolean = false) {
        this.token = token
        this.setApiInstance()
    }

    protected createApiConfiguration(): FetchOptions {
        const env: EnvironmentInterface = EnvConfig
        if (this.token) {
            return {
                baseURL: this.getBaseUrl(env),
                headers: {
                    'Authorization': this.token
                }
            }
        } else {
            return {
                baseURL: this.getBaseUrl(env),
            }
        }
    }

    protected setJWTToken(token: string): void {
        this.token = token;
        this.setApiInstance();
    }

    protected abstract getBaseUrl(EnvConfig: EnvironmentInterface): string;

    protected setApiInstance() {
        const config = this.createApiConfiguration();
        this.apiFetch = this.createApiInstance(config);
    }

    private createApiInstance(config: FetchOptions): $Fetch {
        return $fetch.create(config);
    }
}

export default JWTAuthResource;