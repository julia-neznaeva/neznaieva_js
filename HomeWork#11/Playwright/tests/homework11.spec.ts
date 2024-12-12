import { test, expect } from "@playwright/test";

test("task1", async ({ page }) => {
  await page.goto("https://example.com/.");

  expect(await page.title()).toBe("Example Domain");
  expect(page.url()).toContain("example.com");
  expect(await page.innerText("p")).toMatch(
    "This domain is for use in illustrative examples"
  );
  await expect(page.locator("h1")).toHaveText("Example Domain");
});

test("task2", async ({page})=>{
  await page.goto("https://playwright.dev");
  expect(page.url().startsWith("https://playwright.dev")).toBeTruthy;
  await expect( page.locator('a:has-text("Get started")')).toHaveCount(1);
});

test("task3", async ({page})=>{
  await page.goto("https://www.google.com");
  const searchField = page.getByTitle("Search");
  await searchField.fill("Playwright");
  await page.locator("//input[@value = 'Google Search']").last().click();
  await page.locator("//div[@id='search']//h3").first().waitFor();
  //expect(await page.locator("//div[@id='search']//h3").count()).toBeGreaterThan(0);
 
})

test("task4", async ({page})=>{
  const getStartedbuttonLocator = 'a:has-text("Get started")'
  await page.goto("https://playwright.dev");
  expect(await page.title()).toMatch("Playwright");
  await page.locator(getStartedbuttonLocator).click();
  expect(page.url()).toContain("/doc");
 
})
