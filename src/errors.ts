import { AxiosResponse } from "axios";

export class StakingCapitalAPIError {
    constructor(
        public message: string,
        public error: string,
        public statusCode: number,
    ) {
        this.message = message;
        this.error = error;
        this.statusCode = statusCode;
    }

    public static fromResponse = (response: AxiosResponse) => {
        return new StakingCapitalAPIError(
            response.data.message,
            response.data.error,
            response.status
        );
    }
}