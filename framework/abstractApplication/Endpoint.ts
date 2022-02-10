import { AxiosRequestHeaders } from "axios"
import { AxiosApiClient } from "../apiClient/AxiosApiClient"

export abstract class Endpoint {
    endpoint: string
    apiClient: AxiosApiClient
    headers: AxiosRequestHeaders
    constructor(applicationUrl: string, endpoint: string) {
        this.apiClient = new AxiosApiClient()
        this.endpoint = applicationUrl + this.validateEndpoint(endpoint)
        this.headers = {
            "Content-Type": "application/json"
        }
    }

    private validateEndpoint(endpoint: string) {
        if (!endpoint.startsWith("/")) {
            throw new Error("Endpoint should start from '/'")
        }
        return endpoint
    }
}