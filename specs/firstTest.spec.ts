import { assert } from "console"
import { isBooleanObject } from "util/types"
import { JSONPlaceholderApp } from "../app/JSONPlaceholderApp"
import { AxiosApiClient } from "../framework/apiClient/AxiosApiClient"

describe("First Test", () => {
    it("should run first test", async function () {
        let response = await new JSONPlaceholderApp().getToDoEndpoint().getToDos()
        assert(response.status == 200)

        response.data.forEach(todo => {
            assert(todo.id != undefined)
            assert(todo.completed != undefined)
            assert(todo.title)
            assert(todo.userId != undefined)
        })
    })
})