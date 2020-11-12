const db = require('../database/config')


function find() {
	return db("users")
		.select("id", "username")
}

function findById(id) {
	return db("users")
		.select("id", "username")
		.where({ id })
		.first()
}

function findBy(filter) {
	return db("users")
		.select("id", "username", "password")
        .where(filter)
        .first()
}

async function add(user) {
    const [id] = await db("users").insert(user)
	return findById(id)
}


function remove(id) {
    return db("users")
        .where({ id })
        .del();
  }


module.exports = {
    add,
    find,
    findBy,
    findById,
    remove
}
