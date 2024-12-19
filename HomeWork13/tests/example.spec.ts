import { test, expect, request } from '@playwright/test';

/*За допомогою Playwright реалізуйте наступний сценарій API-тестування: § Зробіть GET-запит на ендпойнт https://reqres.in/api/users/2
§ Переконайтеся, що запит успішний
§ Переконайтеся, що в тілі відповіді від сервера міститься об’єкт "data" з ключем "first_name" зі значенням "Janet"
§ Переконайтеся, що в тілі відповіді міститься об’єкт "data" з ключем "last_name" зі значенням "Weaver"
§ Переконайтеся, що в тілі відповіді міститься об’єкт "data" з ключем "email" зі значенням "janet.weaver@reqres.in"*/
test("task1", async ({ request }) => {
   
  const response = await request.get('https://reqres.in/api/users/2');
  const dataResponse = await response.json();
  expect(response.ok()).toBeTruthy();

  expect(dataResponse).toEqual(
      expect.objectContaining({
          data: expect.objectContaining({
              first_name: 'Janet'
          })
      })
  );

  expect(dataResponse).toEqual(
      expect.objectContaining({
          data: expect.objectContaining({
              last_name: 'Weaver'
          })
      })
  );

  expect(dataResponse).toEqual(
      expect.objectContaining({
          data: expect.objectContaining({
              email: 'janet.weaver@reqres.in'
          })
      })
  );

});
/*За допомогою Playwright реалізуйте наступний сценарій API-тестування: § Зробіть POST-запит на ендпойнт https://dummyjson.com/posts/add
§ Тіло запиту має містити дані для створення нового поста: поле title зі значенням "Awesome title" та поле userId зі значенням 10
§ Переконайтеся, що POST-запит успішний
§ Переконайтеся за допомогою відповіді від сервера, що створено новий пост, який має title зі значенням "Awesome title"
§ Переконайтеся за допомогою відповіді від сервера, що створено новий пост, який має userId зі значенням 10*/
test("task2", async ({ request }) => {
  const response = await request.post(' https://dummyjson.com/posts/add', {
      data:{
          title:"Awesome title",
          userId:"10"
      }
  });
  const dataResponse = await response.json();
  expect(response.ok()).toBeTruthy();

  expect(dataResponse).toEqual(
      expect.objectContaining({
              title: "Awesome title"
       })
  );

  expect(dataResponse).toEqual(
      expect.objectContaining({
              userId: "10"
      })
  );
  console.log(dataResponse);
});

/*
За допомогою Playwright реалізуйте наступний сценарій API-тестування:
	Зробіть GET-запит на ендпойнт https://dummyjson.com/products
	Запит має бути параметризований: 
1)	за допомогою параметра skip=10 потрібно пропустити перших 10 продуктів в відповіді від сервера
2)	за допомогою параметра limit=5 потрібно обмежити вибірку продуктів 5-ма одиницями
	Переконайтеся, що отримано лише 5 продуктів
	Переконайтеся, що поле price 1-го продукту має значення 1899.99
	Переконайтеся, що поле rating 2-го продукту має значення менше 4
	Переконайтеся, що поле stock останнього продукту має значення більше 10
	Переконайтеся, що 1-ий продукт має поле “returnPolicy”

*/
test("task3", async ({ request }) => {
  const response = await request.get('https://dummyjson.com/products',{
    params: {
      'skip': 10,
      'limit': 5,
    }
  });
  const dataResponse = await response.json();
  expect(response.ok()).toBeTruthy();
  const countProducts = await dataResponse.products.length;

  expect(await dataResponse.products.length).toEqual(5);
  expect(await dataResponse.products[0].price).toEqual(1899.99);
  expect(await dataResponse.products[1].rating).toBeLessThan(4);
  expect(await dataResponse.products[countProducts-1].stock).toBeGreaterThan(10);
  
  expect(await dataResponse.products[0]).toEqual(
    expect.objectContaining({
      returnPolicy:expect.any(String),
    })
);
})