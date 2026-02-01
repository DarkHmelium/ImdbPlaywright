import type { Page, Locator } from '@playwright/test';
import { HeaderComponent } from './HeaderComponent';

/**
 //Top250Page - Represents the IMDb Top 250 Movies page
 */
export class Top250Page {
  readonly page: Page;
  readonly header: HeaderComponent;
  readonly movieLinks: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = new HeaderComponent(page);
    this.movieLinks = this.page.getByRole('heading', { level: 3 });
  }

  /**
   * Clicks on the first movie in the Top 250 rankings list
   */
  async clickFirstMovie(): Promise<void> {
    await this.movieLinks.first().click();
    await this.page.waitForLoadState('networkidle');
  }
}
