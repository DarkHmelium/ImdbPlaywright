import type { Page, Locator } from '@playwright/test';

/**
 * TitlePage - Represents the IMDb movie details page
 */
export class MovieDetailsPage {
  readonly page: Page;
  readonly movieTitle: Locator;
  readonly rating: Locator;
  readonly yearLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.movieTitle = this.page.getByTestId('hero__primary-text');
    this.rating = this.page.getByRole('link').filter({ has: page.getByTestId('hero-rating-bar__aggregate-rating__score') })
    this.yearLink = this.page.getByRole('link', { name: /^\d{4}$/ });
  }

  /**
   * Checks if the movie title is visible on the page
   */
  async isMovieTitleVisible(): Promise<boolean> {
    return await this.movieTitle.isVisible();
  }

  /**
 * Checks if the movie title is visible on the page
 */
  async getMovieTitleText(): Promise<string | null> {
    return await this.movieTitle.textContent();
  }

  /**
   * Checks if the rating is visible on the page
   */
  async isRatingVisible(): Promise<boolean> {
    return await this.rating.isVisible();
  }

  //
  //Checks if the year is visible on the page
  //
  async isYearVisible(): Promise<boolean> {
    return await this.yearLink.isVisible();
  }
}
