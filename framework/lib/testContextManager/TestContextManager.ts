export class TestContextManager {
    static testContext: Mocha.Context

    setTestContext(context: Mocha.Context) {
        TestContextManager.testContext = context
    }

    getTestContext() {
        const context = TestContextManager.testContext
        if (context) {
            return TestContextManager.testContext
        } else {
            throw new Error("Test Context wasn't assigned")
        }
    }
}