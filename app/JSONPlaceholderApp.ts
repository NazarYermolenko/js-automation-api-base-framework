import { Application } from "../framework/abstractApplication/Application";
import { ToDoEndpoint } from "./endpoints/to_do_endpoint/ToDoEnpoint";

export class JSONPlaceholderApp extends Application {
    constructor() {
        let url = "https://jsonplaceholder.typicode.com"
        super(url)
    }

    getToDoEndpoint() {
        return new ToDoEndpoint(this.url)
    }
}