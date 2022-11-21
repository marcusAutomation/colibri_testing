import type { Page } from '@playwright/test';
import { webLocators } from '../web_locators/locators';


export class LoginPage{
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto(webLocators.BASE_URL);
    }
}