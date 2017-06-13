const knex = require('./knex');

module.exports = {
				chore: {
								getAll: function() {
												return knex('chores');
								},
								getOne: function(id) {
												//	SELECT * FROM icecream WHERE id=[number]
												return knex('chore').where('id', id);
								},

				}
}