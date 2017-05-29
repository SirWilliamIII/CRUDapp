// Update with your config settings.

module.exports = {
	development: {
		client: 'postgresql',
		connection: 'postgres://localhost/life_things'
	},
	production: {
		client: 'postgresql',
		connection: process.env.DATABASE_URL + '?ssl=true'
	}
};


