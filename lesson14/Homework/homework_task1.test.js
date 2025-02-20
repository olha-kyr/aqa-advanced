const { incorrectUrlInvocation } = require('./homework.js');

test("should return a specific error message for invocation with error", async () => {
    const resultMessage = await incorrectUrlInvocation();

    expect(resultMessage).toEqual("There was an error fetching users from the server.");
});