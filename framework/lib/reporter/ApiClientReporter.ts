import { TestContextManager } from "../testContextManager/TestContextManager"
import addContext from "mochawesome/addContext"
import { AxiosRequestConfig, AxiosResponse } from "axios"

export class ApiClientReporter {
    private testContext: Mocha.Context
    constructor() {
        this.testContext = new TestContextManager().getTestContext()
    }

    addResponseDataToReport(response: AxiosResponse) {
        this.addContextWrapper({ title: "Response status:", value: response.status })
        this.addContextWrapper({ title: "Response data:", value: response.data })
    }

    addRequestDataToReport(request: AxiosRequestConfig) {
        this.addContextWrapper({ title: "Request config:", value: request })

    }

    private addContextWrapper(context: { title: string, value: any }) {
        try {
            addContext(this.testContext, context)
        } catch (err) {
            if (typeof err == "string") {
                throw new Error(err + this.testContext + context)
            }
        }

    }
}