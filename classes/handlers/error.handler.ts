import { NextableInterface } from "../interfaces";

class ErrorHandler implements NextableInterface {
    private readonly error:any;

    public constructor(error:any) {
        this.error = error;
    }

    public next() {
        throw this.error.response;
    }
}

export default ErrorHandler;
