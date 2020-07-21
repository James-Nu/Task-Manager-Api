const {
  calculateTip,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  add,
} = require("../src/math");

test("Should calculate total with tip", () => {
  const total = calculateTip(10, 0.3);

  expect(total).toBe(13);
});

test("Should calculate total with default tip", () => {
  const total = calculateTip(10, 0.4);
  expect(total).toBe(14);
});

test("Should convert 32F to zero degree celsius ", () => {
  const temp = fahrenheitToCelsius(32);
  expect(temp).toBe(0);
});

test("Should convert zero degree celsuis to 32F", () => {
  const temp = celsiusToFahrenheit(0);
  expect(temp).toBe(32);
});

// test("Async test demo ", (done) => {
//   setTimeout(() => {
//     expect(1).toBe(2);
//     done();
//   }, 2000);
// });

test("Should add two numbers promises", (done) => {
  add(2, 3).then((sum) => {
    expect(sum).toBe(5);
    done();
  });
});

test("Should add two numbers async/await", async () => {
  const sum = await add(10, 22);
  expect(sum).toBe(32);
});
