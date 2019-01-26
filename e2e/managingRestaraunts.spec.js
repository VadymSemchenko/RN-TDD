/* eslint-env detox/detox, jest */

describe("Example", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should allow creating a restataunt", async () => {
    const restaurantName = "Puzata Khata";
    await element(by.id("newRestaurantButton")).tap();
    await element(by.id("newRestaurantTextInput")).typeText(restaurantName);
    await element(by.id("saveRestaurantButton")).tap();
    await expect(element(by.label(restaurantName))).toBeVisible();
    await expect(element(by.id("newRestaurantTextInput"))).toBeNotVisible();
  });
});
