import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ApiClientReporter } from "../lib/reporter/ApiClientReporter";

export class AxiosApiClient {
    apiClientReporter: ApiClientReporter
    constructor() {
        this.apiClientReporter = new ApiClientReporter()
    }

    async performApiCall<ResponseDataType = any, RequestDataType = any>(requestPayload: AxiosRequestConfig<RequestDataType>): Promise<AxiosResponse<ResponseDataType, RequestDataType>> {
        this.apiClientReporter.addRequestDataToReport(requestPayload)
        const response = await axios(requestPayload).then((response) => {
            return response
        })
        this.apiClientReporter.addResponseDataToReport(response)
        return response
    }
}