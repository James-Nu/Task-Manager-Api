const request = require("supertest");
const app = require("../src/app");

test("should sign up a new user", async () => {
  await (await request(app).post("/users"))
    .send({
      name: "Maryam",
      email: "Maryamnunoo@yahoo.com",
      password: "Imissyoubad1",
    })
    .expect(201);
});
