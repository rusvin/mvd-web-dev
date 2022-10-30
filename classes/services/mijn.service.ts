import MijnResource from "../resources/mijn.resource"
import { UserDataPresenter } from "../presenter"
import { Child, Partner, UserData } from '../interfaces/userData.interface'

class MijnService {
    private client: MijnResource

    public constructor(token: string) {
        this.client = new MijnResource(token)
    }

    /**
     * Request the password reset mail
     * @param { Object } data
     * @returns { Promise } response
     */
    public async requestPasswordReset(data: { email: string }): Promise<any> {
        const response = await this.client.requestPasswordReset(data)
        return response.next()
    }

    /**
     * Sets new password after password reset is request by PUT
     * @param { Object } data
     * @returns { Promise } response
     */
    public async setNewPassword(data: { code: string; email: string; new_password: string; password_confirmation: string }): Promise<any> {
        const response = await this.client.setNewPassword(data)
        return response.next()
    }

    /**
     * Reqisters the customer, sends a mail to the customer
     * @param { Object } data
     * @returns { Promise } response
     */
    public async registerUser(data: { name: string; email: string; phone_number: string }): Promise<any> {
        const response = await this.client.registerUser(data)
        return response.next()
    }

    /**
     * Verify is the Hash is correct from mail
     * If correct then log user in and proceed further
     * @param data
     * @returns response
     */
    public async verifyUserByHash(data: { hash: string }) {
        const response = await this.client.verifyUserByHash(data)
        return response.next()
    }

    /**
     * Sets JWT token after class has been
     * initialized.
     * @param token
     */
    public setJWTToken(token: string): void {
        this.client.setNewJWTToken(token)
    }

    public async loginAs(data: { public_id: string, token: string }) {
        const response = await this.client.loginAs(data)
        return response.next()
    }

    public async logout() {
        const response = await this.client.logout()
        return response.next()
    }

    /**
     * Gets data from API. Transforms it to better names.
     * @returns {UserData} UserDataPresenter.transformUserData
     */
    public async getUserData(): Promise<UserData> {
        const response = await this.client.getUserData()
        return await UserDataPresenter.transformApiUserData(response.next())
    }
}

export default MijnService
