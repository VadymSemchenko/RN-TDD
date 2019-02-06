const { device, expect, element, by, waitFor, cleanup } = require('detox');
const {
  NEW_RESTAURANT_BUTTON,
  SAVE_RESTAURANT_BUTTON,
  NEW_RESTAURANT_TEXT_INPUT,
} = require('../constants/testIDs');
const restaurantName = 'Puzata Khata';

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should allow creating a restataunt', async () => {
    await element(by.id(NEW_RESTAURANT_BUTTON)).tap();
    await expect(element(by.id(NEW_RESTAURANT_BUTTON))).toNotExist();
    await element(by.id(NEW_RESTAURANT_TEXT_INPUT)).typeText(restaurantName);
    await element(by.id(SAVE_RESTAURANT_BUTTON)).tap();
    await expect(element(by.label(restaurantName))).toBeVisible();
    await expect(element(by.id(NEW_RESTAURANT_TEXT_INPUT))).toNotExist();
  });

  afterEach(async () => {
    await cleanup();
  });
});
