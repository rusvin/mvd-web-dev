import { NextableInterface } from '../interfaces'

class ResponseHandler implements NextableInterface {

    private readonly response: any

    public constructor(response: any) {
        this.response = response
    }

    public next() {
        return this.response
    }
}

export default ResponseHandler