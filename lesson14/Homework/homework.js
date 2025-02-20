const axios = require('axios');

async function incorrectUrlInvocation() {
	try {
		return await axios.get('http://localhost:8080/users/all');
	} catch (e) {
		console.error(e);
		return 'There was an error fetching users from the server.';
	}
}

async function requestHeadersAndParams(email, password) {
	return await axios.get('http://localhost:8080/user', {
			'email': email,
			'password': password
		},
		{
			headers: {
				'Content-Type': 'application/json'
			}
		});
}

module.exports = { incorrectUrlInvocation, requestHeadersAndParams };