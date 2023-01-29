import { AxiosResponse } from "axios";
export declare class StakingCapitalAPIError {
    message: string;
    error: string;
    statusCode: number;
    constructor(message: string, error: string, statusCode: number);
    static fromResponse: (response: AxiosResponse) => StakingCapitalAPIError;
}
