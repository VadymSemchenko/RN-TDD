import { NEW_RESTAURANT_BUTTON, NEW_RESTAURANT_TEXT_INPUT } from '../constants/testIdNames.ts';

const restaurantName = 'Puzata Khata';

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should allow creating a restataunt', async () => {
    await element(by.id(NEW_RESTAURANT_TEXT_INPUT)).typeText(restaurantName);
    await element(by.id(NEW_RESTAURANT_BUTTON)).tap();
    await expect(element(by.label(restaurantName))).toBeVisible();
    await expect(element(by.id(NEW_RESTAURANT_TEXT_INPUT))).toBeNotVisible();
  });
});
