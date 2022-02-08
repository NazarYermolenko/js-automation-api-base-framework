import { assert } from "console"
import moment from "moment"
import { ToDo } from "../app/endpoints/to_do_endpoint/ToDo"
import { JSONPlaceholderApp } from "../app/JSONPlaceholderApp"

describe("JSON Place holder", async () => {
    let todo: ToDo | any
    let todoEndpoint = new JSONPlaceholderApp().getToDoEndpoint()

    it("GET - ToDo", async function () {
        let response = await todoEndpoint.getToDos()
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
        let response = await todoEndpoint.getToDoById(todo.id)
        assert(response.status == 200)
        assert(response.data != undefined)
    })

    it("PUT - ToDo by id", async function () {
        let changedToDo = { ...todo, title: `Changed Title ${moment().format("HH:mm:ss")}` }
        let response = await todoEndpoint.changeToDoById(todo.id, changedToDo)
        assert(response.status == 200)
        assert(response.data == changedToDo)
    })

    it(`DELETE - ToDo by id`, async function () {
        console.log(todo)
        let deleteResponse = await todoEndpoint.deleteToDoById(todo.id)
        assert(deleteResponse.status == 200)
    })
})