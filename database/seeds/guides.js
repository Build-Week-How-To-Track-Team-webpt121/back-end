exports.seed = async function (knex) {
	await knex('guides').truncate()
	await knex('guides').insert([
    { description: 'Deodorant on an insect bite or itchy site will stop the itch', userId: 1},
    { description: 'Poke a fork through the creamy part of an Oreo so you can dip the whole Oreo in milk without getting your fingers wet', userId: 1},
    { description: 'When buying on Craigslist, use a fake email to lowball the seller by a lot, then on your regular email, offer a reasonable (and lower!) price.', userId: 2 },
    { description: 'When you are at the pool or beach, set your flip-flops facedown. Then they wont be scalding hot from the sun when you are ready to leave', userId: 2 },
    { description: 'Holding a banana peel over a bruise (for about 10 to 30 min) will remove its color!', userId: 3 },
	])
}
