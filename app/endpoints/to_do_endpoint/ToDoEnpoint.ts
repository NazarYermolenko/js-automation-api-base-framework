import { AxiosResponse } from "axios";
import { Endpoint } from "../../../framework/abstractApplication/Endpoint";
import { ToDo } from "./ToDo";

export class ToDoEndpoint extends Endpoint {
    constructor(applicationUrl: string) {
        let endpoint = "/todos"
        super(applicationUrl, endpoint)
    }

    async getToDos(): Promise<AxiosResponse<Array<ToDo>, Array<ToDo>>> {
        return this.apiClient.performApiCall<Array<ToDo>, Array<ToDo>>({
            url: this.endpoint,
            method: "GET"
        })
    }

    async getToDoById(id: number) {
        return this.apiClient.performApiCall<ToDo, number>({
            url: this.endpoint + `/${id}`,
            method: "GET"
        })
    }

    async changeToDoById(id: number, changedToDo: ToDo) {
        return this.apiClient.performApiCall<ToDo, ToDo>({
            url: this.endpoint + `/${id}`,
            method: "PUT",
            data: changedToDo
        })
    }

    async deleteToDoById(id: number) {
        return this.apiClient.performApiCall<ToDo, ToDo>({
            url: this.endpoint + `/${id}`,
            method: "DELETE"
        })
    }
}