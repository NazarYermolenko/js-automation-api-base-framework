import { Response, RequestInit } from "node-fetch"


export interface ApiClient {
    performApiCall(url: URL, requestPayload: RequestInit): Promise<Response>
    [props: string]: any
}