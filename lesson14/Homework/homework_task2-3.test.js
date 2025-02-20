const { incorrectUrlInvocation,requestHeadersAndParams } = require('./homework.js');
const axios = require("axios");

jest.mock("axios");

const mockedResponse = { data: "mocked response data" };

afterEach(() => {
	jest.clearAllMocks();
});


describe("incorrect url invocation function test cases", () => {

  test("should return mocked response when successful", async() => {
    axios.get.mockResolvedValue(mockedResponse);

    const response = await incorrectUrlInvocation();

    expect(response).toEqual(mockedResponse);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test("should return error text when NOT successful", async () => {
    axios.get.mockRejectedValue(new Error('Network Error'));

    const result = await incorrectUrlInvocation();

    expect(result).toEqual("There was an error fetching users from the server.");
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});

describe("request headers and parameters test", () => {
	test("should add headers and parameters to request", async () => {
		axios.get.mockResolvedValue(mockedResponse);
	
		const email = 'olha@test.email';
		const password = '789';
	
		const resultMessage = await requestHeadersAndParams(email, password);
	
		expect(resultMessage).toBe(mockedResponse);
		expect(axios.get).toHaveBeenCalledWith(
		  'http://localhost:8080/user',
		  { email, password },
		  { headers: { 'Content-Type': 'application/json' } }
		);
	  });
})
