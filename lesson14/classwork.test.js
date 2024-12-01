let axios = require('axios');

test('should hit API and get response', async () => {
	let res = await axios.get('https://httpbin.org/get', { params: { answer: 42 } });

	expect(res.constructor.name).toBe('Object'); // 'Object', means `res` is a POJO

	// `res.data` contains the parsed response body
	expect(res.data).toHaveProperty('args'); // { args: { answer: 42 }, ... }
	expect(res.data).toBeInstanceOf(Object); // true
});
