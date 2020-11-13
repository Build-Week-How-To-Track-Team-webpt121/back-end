const bcrypt = require('bcryptjs')

exports.seed = async function (knex) {
	await knex('users').truncate()
	await knex('users').insert([
		{ username: 'user1', password: await bcrypt.hash('password', 14) },
		{ username: 'user2', password: await bcrypt.hash('password', 14) },
		{ username: 'user3', password: await bcrypt.hash('password', 14) },
		{ username: 'user4', password: await bcrypt.hash('test', 14) },
	])
}
