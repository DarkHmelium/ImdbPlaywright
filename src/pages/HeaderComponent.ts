import type { Page, Locator } from '@playwright/test';
import { stat } from 'node:fs';

/**
 * HeaderComponent - IMDb header
 */
export class HeaderComponent {
    readonly page: Page;
    readonly menuButton: Locator;
    readonly searchInput: Locator;
    readonly suggestedResults: Locator;

    constructor(page: Page) {
        this.page = page;
        this.menuButton = this.page.getByLabel(/nav/i).locator('visible=true');
        this.searchInput = this.page.getByTestId('suggestion-search');
        this.suggestedResults = this.page.getByTestId('search-result--const');
    }

    /**
     * Search for content by typing and selecting from suggestions.
     * @param movieTitle - The search term (movie title, director name, actor name, etc.)
     */
    async searchFor(movieTitle: string): Promise<void> {
        await this.searchInput.click();
        await this.searchInput.fill(movieTitle);
        await this.suggestedResults.first().waitFor({ state: 'visible' });
    }

    /**
     * Check if a specific search term is present in the autocomplete suggestions
     * @param searchTerm - The search term to verify
     * @returns true if the term is found in suggestions
     */
    async isMovieInSuggestions(searchTerm: string): Promise<boolean> {
        const suggestedResultsText = await this.suggestedResults.allTextContents();
        return suggestedResultsText.every(text => text.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    /**
     * Click on a suggestion by matching text
     * @param searchTerm - The search result to select
     */
    async selectByTitle(searchTerm: string): Promise<void> {
        await this.suggestedResults.getByText(searchTerm, { exact: true }).first().click();
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Opens the dropdown menu
     */
    async openMenuDropdown(): Promise<void> {
        await this.menuButton.click();
        await this.page.waitForLoadState('domcontentloaded');
    }

    /**
    * Opens the dropdown menu
    */
    async clickLinkInMenuDropdown(menuLink: string): Promise<void> {
        await this.page.getByLabel(new RegExp(menuLink, 'i')).click();
        await this.page.waitForLoadState('networkidle');
    }
}
