import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { MovieDetailsPage } from '../pages/MovieDetailsPage';
import { Top250Page } from '../pages/Top250Page';

type IMDbFixtures = {
  homePage: HomePage;
  movieDetailsPage: MovieDetailsPage;
  top250Page: Top250Page;
};

export const test = base.extend<IMDbFixtures>({
  homePage: async ({ page }, use) => {
    const home = new HomePage(page);
    await use(home);
  },

  movieDetailsPage: async ({ page }, use) => {
    await use(new MovieDetailsPage(page));
  },

  top250Page: async ({ page }, use) => {
    await use(new Top250Page(page));
  },
});

export { expect } from '@playwright/test';
