import { test, expect } from "@playwright/test";

test("Task1", async ({ page }) => {
  const usernameValue = "tomsmith";
  const passwordValue = "SuperSecretPassword!";

  const usernameFake = "userNameFake";
  const passwordFake = "passwordFake";

  await page.goto("https://the-internet.herokuapp.com/login");

  const usernameLocator = page.getByRole("textbox", { name: "username" });
  const passwordLocator = page.getByRole("textbox", { name: "password" });
  const loginbuttonLocator = page.getByRole("button");
  const logoutButtonLocator = page.locator('a:has-text("Logout")');

  await usernameLocator.fill(usernameFake);
  await passwordLocator.fill(passwordFake);
  await loginbuttonLocator.click();

  await expect(page.getByText(/Your username is invalid!/)).toBeVisible();

  await usernameLocator.fill(usernameValue);
  await passwordLocator.fill(passwordValue);
  await loginbuttonLocator.click();

  await expect(page.getByText(/ You logged into a secure area!/)).toBeVisible();

  await logoutButtonLocator.click();
});

test("Task2", async ({ page }) => {
  await page.goto("https://demo.guru99.com/test/radio.html");

  const checkBoxesLocator = page.getByRole("checkbox");

  for (let i = 0; i < (await checkBoxesLocator.count()); i++) {
    await checkBoxesLocator.nth(i).check();
    await expect(checkBoxesLocator.nth(i)).toBeChecked();
  }

  for (let i = 0; i < (await checkBoxesLocator.count()); i++) {
    await checkBoxesLocator.nth(i).uncheck();
    await expect(checkBoxesLocator.nth(i)).not.toBeChecked();
  }
});

test("Task3", async ({ page }) => {
  await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select", { waitUntil: 'domcontentloaded' });

  const frame = page.frameLocator('#iframeResult');
  const dropdown = frame.locator('#cars');
  
  await dropdown.waitFor({ state: 'visible' });
  await dropdown.click();
  await dropdown.selectOption("Saab");
  await expect(dropdown).toHaveValue('saab');
});

test("Task4", async ({ page }) => {
  await page.goto("http://formy-project.herokuapp.com/form");

  const firstName = "Sam";
  const lastName = "Robertson";
  const jobTitle = "Test Automation Engineer";

  const firstNameText = page.getByPlaceholder("Enter first name");
  const lastNameText = page.getByPlaceholder("Enter last name");
  const jobTitleText = page.getByPlaceholder("Enter your job title");
  const collegeRadio = page.locator('#radio-button-2');
  const maleCheckBox =page.locator('#checkbox-1');
  const expirienceDropdown = page.locator('#select-menu');
  const dataPicker = page.getByPlaceholder('mm/dd/yyyy');
  const submitButton = page.getByRole('button');

  await firstNameText.fill(firstName);
  await lastNameText.fill(lastName);
  await jobTitleText.fill(jobTitle);
  await collegeRadio.click();
  await maleCheckBox.click();

  await expirienceDropdown.click();
  await expirienceDropdown.selectOption("5-9");

  await dataPicker.fill("14/12/2024");
  await submitButton.click();

  await expect(page.getByText(/The form was successfully submitted!/)).toBeVisible();

});

test("Task5", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=common/home");

  const categoriesDropdown = page.getByRole('button').getByText("All Categories");
  await categoriesDropdown.click();

  const phonesPDAsItem = page.locator('a:has-text("Phones & PDAs")').first();
  await phonesPDAsItem.click();

  const searchButton = page.getByText("Search");
  await searchButton.click();
  await page.waitForLoadState();

  const minPriceInput = page.getByPlaceholder("Minimum Price").last();
  await minPriceInput.fill("135");

  const maxPriceInput = page.getByPlaceholder("Maximum Price").last();
  await maxPriceInput.fill("165");
  await maxPriceInput.press("Enter");

  await expect(page.getByText(/Showing 1 to 8 of 8 /)).toBeVisible();

  const htsLink = page.getByText("HTC Touch HD").first();
  await htsLink.click();

  await page.waitForLoadState();

  const addToCartButton = page.getByTitle("Add to Cart").last();
  await addToCartButton.click();
  
  const reviewCart = page.getByText(/View Cart /);
  await reviewCart.click();

  const total = page.locator('//td[text()="Total:"]//following-sibling::td/strong').last();
  await  expect(total).toHaveText('$146.00');

});
