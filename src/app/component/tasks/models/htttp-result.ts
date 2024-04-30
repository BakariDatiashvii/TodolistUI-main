import { HttpResultStatus } from "./http-result-status";

export interface HttpResult<T>{
    message: string | undefined;
    response: T;
}