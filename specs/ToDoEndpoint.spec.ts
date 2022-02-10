import { assert } from "console"
import moment from "moment"
import { ToDo } from "../app/endpoints/to_do_endpoint/ToDo"
import { JSONPlaceholderApp } from "../app/JSONPlaceholderApp"
import { TestContextManager } from "../framework/lib/testContextManager/TestContextManager"

describe("JSON Place holder", async () => {
    let todo: ToDo | any
    let app = new JSONPlaceholderApp()

    it("GET - ToDo", async function () {
        new TestContextManager().setTestContext(this)
        let response = await app.getToDoEndpoint().getToDos()
        assert(response.status == 200)

        response.data.forEach(todo => {
            assert(todo.id != undefined)
            assert(todo.completed != undefined)
            assert(todo.title)
            assert(todo.userId != undefined)
        })

        todo = response.data.shift()
        assert(todo != undefined)
    })

    it(`GET - ToDo by id`, async function () {
        new TestContextManager().setTestContext(this)
        let response = await app.getToDoEndpoint().getToDoById(todo.id)
        assert(response.status == 200)
        assert(response.data != undefined)
    })

    it("PUT - ToDo by id", async function () {
        new TestContextManager().setTestContext(this)
        let changedToDo = { ...todo, title: `Changed Title ${moment().format("HH:mm:ss")}` }
        let response = await app.getToDoEndpoint().changeToDoById(todo.id, changedToDo)
        assert(response.status == 200)
        assert(response.data == changedToDo)
    })

    it(`DELETE - ToDo by id`, async function () {
        new TestContextManager().setTestContext(this)
        let deleteResponse = await app.getToDoEndpoint().deleteToDoById(todo.id)
        assert(deleteResponse.status == 200)
    })
})