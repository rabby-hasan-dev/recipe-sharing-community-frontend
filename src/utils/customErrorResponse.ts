import { AxiosError, AxiosResponseHeaders } from "axios";

interface ErrorDetailsBackEnd {
    success: boolean;
    message: string;
    errorSources: Array<any>;
    err: Record<string, any>;
    stack?: string;
}

type CustomErrorResponse =
    | {
        status: number;
        data: ErrorDetailsBackEnd;
        headers: Partial<AxiosResponseHeaders | Record<string, string>>;
    }
    | XMLHttpRequest
    | string;


export const customErrorResponse = (error: AxiosError): CustomErrorResponse => {
    let responseError: CustomErrorResponse;
    if (error?.response) {
        responseError = {
            status: error.response.status,
            data: error.response.data as ErrorDetailsBackEnd,
            headers: error.response.headers,
        }
    } else if (error?.request) {
        responseError = error.request
    } else {
        responseError = error.message;
    }

    return responseError;
}


// Check if responseError has a 'data' property
//  if (typeof responseError === "object" && "data" in responseError) {
//     throw new Error(responseError.data.message);
// } else if (typeof responseError === "string") {
//     throw new Error(responseError); // Throw string message directly
// } else {
//     throw new Error("An unknown error occurred."); // Fallback error
// }