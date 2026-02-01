# IMDb Playwright Automation

This project is a test automation framework for [IMDb](https://www.imdb.com) built using [Playwright](https://playwright.dev/) and TypeScript. It demonstrates the use of the Page Object Model (POM) design pattern and custom fixtures for clean and maintainable test code.

## Features

- **Page Object Model (POM):** Encapsulates page-specific logic in dedicated classes located in `src/pages`.
- **Custom Fixtures:** Uses Playwright's fixture system (`src/fixtures/imdbFixtures.ts`) to automatically initialize and inject page objects into tests.
- **Cross-Browser Testing:** Configured to run on Chromium, Firefox, and WebKit.
- **Robust Selectors:** Uses resilient locators like `getByTestId`, `getByRole`, and `getByLabel`.

## Project Structure

- **`tests/`**: Contains test specifications.
  - `imdb_flows.spec.ts`: Main end-to-end user flows (Search, Top 250 navigation).
- **`src/pages/`**: Page Object classes.
  - `HomePage.ts`: Landing page interactions.
  - `HeaderComponent.ts`: Shared header navigation and search logic.
  - `MovieDetailsPage.ts`: Movie details verification.
  - `Top250Page.ts`: Top 250 charts page interactions.
- **`src/fixtures/`**: Custom test fixtures.
- **`playwright.config.ts`**: Project configuration (timeouts, base URL, browser settings).

## Prerequisites

- Node.js (v14 or higher)
- npm

## Installation

1. Install project dependencies:
   ```bash
   npm install
   ```

2. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

You can use the npm scripts configured in `package.json`:

```bash
npm test              # Runs all tests
npm run test:chromium # Runs tests on Chromium
npm run test:ff       # Runs tests on Firefox
npm run test:safari   # Runs tests on WebKit
```

Or run via Playwright CLI directly:

Run all tests in headless mode:
```bash
npx playwright test
```

Run a specific test file:
```bash
npx playwright test tests/imdb_flows.spec.ts
```

Run tests with the UI mode (interactive):
```bash
npx playwright test --ui
```

## Viewing Reports

If a test fails, a screenshot is captured automatically. To view the HTML report after a run:

```bash
npm run test:report
# or
npx playwright show-report
```
