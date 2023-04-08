import { expect, test } from '@playwright/test';

test('Product slider and checkout page test', async ({ page }) => {
  await page.goto('https://example.com/'); // replace with the URL of the page you want to test

  // Verify that the current product image, title, price, and colors are correct
  const currentProductImg = await page.$('.productImg');
  const currentProductTitle = await page.$('.productTitle');
  const currentProductPrice = await page.$('.productPrice');
  const currentProductColors = await page.$$('.color');
  expect(await currentProductImg.getAttribute('src')).toEqual(products[0].colors[0].img);
  expect(await currentProductTitle.textContent()).toEqual(products[0].title);
  expect(await currentProductPrice.textContent()).toEqual('$' + products[0].price);
  expect(await currentProductColors[0].getAttribute('style')).toContain('background-color: ' + products[0].colors[0].code);

  // Click on each menu item and verify that the slide and product details change accordingly
  const menuItems = await page.$$('.menuItem');
  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i];
    await menuItem.click();
    expect(await currentProductImg.getAttribute('src')).toEqual(products[i].colors[0].img);
    expect(await currentProductTitle.textContent()).toEqual(products[i].title);
    expect(await currentProductPrice.textContent()).toEqual('$' + products[i].price);
    const shoeColors = await page.$$('.color');
    for (let j = 0; j < shoeColors.length; j++) {
      const shoeColor = shoeColors[j];
      expect(await shoeColor.getAttribute('style')).toContain('background-color: ' + products[i].colors[j].code);
    }
  }

  // Click on each shoe color and verify that the product image changes to the corresponding color
  const shoeColors = await page.$$('.color');
  for (let i = 0; i < shoeColors.length; i++) {
    const shoeColor = shoeColors[i];
    await shoeColor.click();
    expect(await currentProductImg.getAttribute('src')).toEqual(products[0].colors[i].img);
  }

  // Click on each shoe size and verify that the selected size is highlighted
  const shoeSizes = await page.$$('.size');
  for (let i = 0; i < shoeSizes.length; i++) {
    const shoeSize = shoeSizes[i];
    await shoeSize.click();
    const backgroundColor = await shoeSize.getAttribute('style');
    const color = await shoeSize.getAttribute('style');
    expect(backgroundColor).toContain('background-color: black');
    expect(color).toContain('color: white');
  }

  // Click on the "Buy Now" button and verify that the payment form is displayed
  const productButton = await page.$('.productButton');
  await productButton.click();
  const paymentForm = await page.$('.payment');
  expect(await paymentForm.isVisible()).toBeTruthy();

  // Click on the "X" button on the payment form and verify that the form is hidden
  const closeButton = await page.$('.close');
  await closeButton.click();
  expect(await paymentForm.isVisible()).toBeFalsy();
});
