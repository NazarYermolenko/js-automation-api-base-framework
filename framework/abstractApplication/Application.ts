export abstract class Application {
    url: string
    constructor(url: string) {
        this.url = this.validateApplicationUrl(url)
    }

    private validateApplicationUrl(url: string) {
        if (!(url.startsWith("http") || url.startsWith("https"))) {
            throw new Error("URL should start with 'http' or 'https'")
        }
        if (url.endsWith("/")) {
            throw new Error("URL shoudn't end with '/'")
        }
        return url
    }
}