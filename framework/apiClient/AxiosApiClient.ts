import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export class AxiosApiClient {
    async performApiCall<ResponseDataType = any, RequestDataType = any>(requestPayload: AxiosRequestConfig<RequestDataType>): Promise<AxiosResponse<ResponseDataType, RequestDataType>> {
        return await axios(requestPayload).then((response) => {
            return response
        })
    }
}