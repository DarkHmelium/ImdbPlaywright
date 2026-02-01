import { test, expect } from '../src/fixtures/imdbFixtures';

test.describe('IMDb User Flows', () => {

  test('TC1: Search and validate movie', async ({ homePage, movieDetailsPage }) => {
    const movieTitle = 'Inception';

    await homePage.goToHomePage();
    await homePage.header.searchFor(movieTitle);
    const isMovieInSuggestion = await homePage.header.isMovieInSuggestions(movieTitle);
    expect(isMovieInSuggestion, `Expect "${movieTitle}" to be in suggestions`).toBeTruthy();
    await homePage.header.selectByTitle(movieTitle);

    expect(await movieDetailsPage.isMovieTitleVisible()).toBeTruthy();
    const movieTitleText = await movieDetailsPage.getMovieTitleText();
    expect(movieTitleText).toEqual(movieTitle);
  });

  test('TC2: test Top 250 movies page navigation and Movie details page', async ({ homePage, movieDetailsPage, top250Page }) => {
    const top250Text = 'Top 250 movies';

    await homePage.goToHomePage();
    await homePage.header.openMenuDropdown();
    await homePage.header.clickLinkInMenuDropdown(top250Text);

    await top250Page.clickFirstMovie();

    expect(await movieDetailsPage.isMovieTitleVisible()).toBe(true);
    expect(await movieDetailsPage.isRatingVisible()).toBe(true);
    expect(await movieDetailsPage.isYearVisible()).toBe(true);
  });
});
