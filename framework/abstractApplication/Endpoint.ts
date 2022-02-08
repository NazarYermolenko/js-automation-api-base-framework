import { AxiosApiClient } from "../apiClient/AxiosApiClient"

export abstract class Endpoint {
    endpoint: string
    apiClient: AxiosApiClient
    constructor(applicationUrl: string, endpoint: string) {
        this.apiClient = new AxiosApiClient()
        this.endpoint = applicationUrl + this.validateEndpoint(endpoint)
    }

    private validateEndpoint(endpoint: string) {
        if (endpoint.startsWith("/")) {
            return endpoint
        } else {
            throw new Error("Endpoint should start from '/'")
        }
    }
}