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
}