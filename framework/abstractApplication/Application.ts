export abstract class Application {
    url: string
    constructor(url: string) {
        this.url = this.validateApplicationUrl(url)
    }

    private validateApplicationUrl(url: string) {
        if (url.startsWith("http") || url.startsWith("https")) {
            if (url.endsWith("/")) {
                throw new Error("URL shoudn't end with '/'")
            } else {
                return url
            }
        } else {
            throw new Error("URL should start with 'http' or 'https'")
        }
    }
}