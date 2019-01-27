const restaurantName = 'Puzata Khata';

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should allow creating a restataunt', async () => {
    await element(by.id('NewRestaurantTextInput')).typeText(restaurantName);
    await element(by.id('NewRestaurantButton')).tap();
    await expect(element(by.label(restaurantName))).toBeVisible();
    await expect(element(by.id('NewRetsaurantTextInput'))).toBeNotVisible();
  });
});
