import { EnvironmentInterface } from '../interfaces';
import { EnvConfig } from '~/config';
import {$fetch, $Fetch, FetchOptions} from "~/node_modules/ohmyfetch";

abstract class BaseAuthResource {

    protected apiFetch: $Fetch;

    public constructor() {
        this.setApiInstance()
    }

    protected createApiConfiguration(): FetchOptions {
        const env: EnvironmentInterface = EnvConfig
        return {
            baseURL: this.getBaseUrl(env),
            headers: {
                'Content-Type': 'applications/json',
                'Authorization': 'Basic ' + btoa(env.api.auth.username + ":" + env.api.auth.password)
            }
        }
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

export default BaseAuthResource;