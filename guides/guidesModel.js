const db = require('../database/config');

function find() {
  return db('guides')
}

function findById(id) {
  return db('guides')
    .where('id', id)
    .first();
}

function findByUser(id) {
    return db('guides')
    .where('userId', id)
}

function add(task) {
  return db('guides')
    .insert(task, 'id')
    .then(([id]) => findById(id));
}

function update(changes, id) {
  return db('guides').where({ id }).update(changes);
}

function remove(id) {
  return db('guides').where({ id }).delete();
}

module.exports = {
  find,
  findById,
  findByUser,
  add,
  update,
  remove,
};