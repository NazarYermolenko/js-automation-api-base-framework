import { ApiClient } from "./ApiClient";
import fetch, { Response, RequestInit } from "node-fetch"

export class FetchApiClient implements ApiClient {
    async performApiCall(url: URL, requestPayload: RequestInit): Promise<Response> {
        return fetch(url.href, requestPayload)
    }
}