import StrokeWidthTokensPageObject from '../pages/StrokeWidthTokensPageObject';

// Before testing begins, allow up to 60 seconds for app to open
describe('Stroke Width Tokens Testing Initialization', () => {
  it('Wait for app load', async () => {
    await StrokeWidthTokensPageObject.waitForInitialPageToDisplay();
    expect(await StrokeWidthTokensPageObject.isInitialPageDisplayed()).toBeTruthy(StrokeWidthTokensPageObject.ERRORMESSAGE_APPLOAD);
  });

  it('Click and navigate to Stroke Width Tokens test page', async () => {
    await StrokeWidthTokensPageObject.navigateToPageAndLoadTests();
    expect(await StrokeWidthTokensPageObject.isPageLoaded()).toBeTruthy(StrokeWidthTokensPageObject.ERRORMESSAGE_PAGELOAD);
  });
});
