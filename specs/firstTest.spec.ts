import { AxiosApiClient } from "../framework/apiClient/AxiosApiClient"

describe("First Test", () => {
    it("should run first test", async function () {
        let url = new URL("http://google.com")
        let response = await new AxiosApiClient().performApiCall({
            url: url.href,
            method: "GET",
        })
        console.log(response)
    })
})