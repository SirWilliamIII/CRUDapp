exports.up = function(knex, Promise) {
				return knex.schema.createTable('chores', table => {
								table.increments('id').primary();
								table.string('name').notNullable();
								table.rating('integer').nullable();
				});
  
};

exports.down = function(knex, Promise) {
  
};
