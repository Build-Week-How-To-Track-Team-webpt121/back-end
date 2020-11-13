exports.up = async function(knex) {
    await knex.schema.createTable('guides', (table) => {
        table.increments('id')
        table.text('description').notNull()
        table.integer('userId')
            .notNull()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
}

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists("guides")
}