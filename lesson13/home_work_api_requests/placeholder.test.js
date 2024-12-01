let axios = require("axios");

test("Get all resources list", async () => {
  let response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
    headers: { "content-type": "application/json" },
  });

  expect(response.status).toEqual(200);
  expect(typeof response.data[0].userId).toBe("number");
});

test("Get the particular User", async () => {
  let response = await axios.get("https://jsonplaceholder.typicode.com/posts/1", {
    headers: { "content-type": "application/json" },
  });

  expect(response.status).toEqual(200);
  expect(typeof response.data.userId).toBe("number");
  expect(typeof response.data.body).toBe("string");
});

test("Create the new User", async () => {
  let response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    { id: 43, title: "test Olha title", body: "test Olha body", userId: 1 },
    {
      headers: { "content-type": "application/json" },
    },
  );

  expect(response.status).toEqual(201);
  expect(response.data.title).toBe("test Olha title");
  expect(response.data.body).toBe("test Olha body");
});

test("Get comments for the particulat postId", async () => {
  let response = await axios.get("https://jsonplaceholder.typicode.com/comments?postId=2", {
    headers: {
      "content-type": "application/json",
    },
  });

  expect(response.status).toEqual(200);
  expect(response.data[0].email).toContain("@");
});

test("Create the new User", async () => {
  let response = await axios.put(
    "https://jsonplaceholder.typicode.com/posts/2",
    { id: 2, title: "test Olha title_updated", body: "test Olha body_updated", userId: 1 },
    {
      headers: { "content-type": "application/json" },
    },
  ); //use PUT instead of another POST just for variety of methods been used

  expect(response.status).toEqual(200);
  expect(typeof response.data.title).toBe("string");
  expect(response.data.body).toBe("test Olha body_updated");
});
