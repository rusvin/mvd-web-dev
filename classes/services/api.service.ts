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

    public async getHouseData(data: { Zipcode: string; HouseNumber: string; HouseNumberAddition: string }) {
        const response = await this.client.getHouseData(data)
        return response.next()
    }

    public async getHouseDataAdditions(data: { zipcode: string; houseNumber: string; }) {
        const response = await this.client.getHouseDataAdditions(data)
        return response.next()
    }
}

export default ApiService