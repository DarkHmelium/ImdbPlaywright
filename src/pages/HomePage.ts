import type { Page } from '@playwright/test';
import { HeaderComponent } from './HeaderComponent';

/**
 * HomePage - Represents the IMDb home page
 */
export class HomePage {
    readonly page: Page;
    readonly header: HeaderComponent;

    constructor(page: Page) {
        this.page = page;
        this.header = new HeaderComponent(page);
    }

    /**
     * Navigate to the IMDb home page
     */
    async goToHomePage() {
        await this.page.goto('/');
    }
}
