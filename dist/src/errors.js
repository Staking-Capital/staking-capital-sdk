"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StakingCapitalAPIError = void 0;
class StakingCapitalAPIError {
    constructor(message, error, statusCode) {
        this.message = message;
        this.error = error;
        this.statusCode = statusCode;
        this.message = message;
        this.error = error;
        this.statusCode = statusCode;
    }
}
exports.StakingCapitalAPIError = StakingCapitalAPIError;
StakingCapitalAPIError.fromResponse = (response) => {
    return new StakingCapitalAPIError(response.data.message, response.data.error, response.status);
};
