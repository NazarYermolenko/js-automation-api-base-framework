import { FetchApiClient } from "../framework/apiClient/FetchApiClient"

describe("First Test", () => {
    it("should run first test", async function () {
        let url = new URL("http://google.com")
        let response = await new FetchApiClient().performApiCall(url, {
            method: "get"
        })
        console.log(response.status)
    })
})