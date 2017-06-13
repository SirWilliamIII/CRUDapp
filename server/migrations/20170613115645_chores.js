exports.up = function(knex, Promise) {

				let date = new Date();
				let today = date.toLocaleDateString();

				return knex.schema.createTable('chores', table => {
								table.increments('id').primary();
								table.string('task').notNullable();
								table.integer('importanceRating').nullable();
								table.timestamps(today);
				});
  
};

exports.down = function(knex, Promise) {
  
};
