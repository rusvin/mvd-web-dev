import ApiResource from '../resources/api.resource'

class ApiService {
    private client: ApiResource

    constructor() {
        this.client = new ApiResource()
    }

    /** 
     * Validates E-mailadres in mailtrap API
     * @param {Object} data
     * @return {Boolean} isValid
     */
    public async validateEmail(data: { email: string }): Promise<Boolean> {
        const response = await this.client.validateEmail(data)
        return response.next()
    }
}

export default ApiService