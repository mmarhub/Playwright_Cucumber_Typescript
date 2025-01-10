import { LaunchOptions, chromium, firefox, webkit } from "@playwright/test";

export const launchBrowser = () => {

    const browserType: string = process.env.npm_config_BROWSER || "chrome";
    const headless: boolean = process.env.npm_config_HEADLESS?.toLowerCase() === "true";
    
    const options: LaunchOptions = {
        headless: headless,
        slowMo: 500,
        args: ['--start-maximized']
    }
    
    switch (browserType) {
        case "chromium":
            return chromium.launch(options);
        case "firefox":
            return firefox.launch(options);
        case "webkit":
            return webkit.launch(options);
        case "edge":
            return chromium.launch({
                channel: 'msedge',
                ...options
            });
        case "chrome":
            return chromium.launch({
                channel: 'chrome',
                ...options
            });
        default:
            throw new Error("Please set the proper browser!")
    }

}