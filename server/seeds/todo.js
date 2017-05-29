
exports.seed = function(knex, Promise) {

  return knex('todo').del()
    .then(function () {
      const todos = [

	      {
	        title: 'Build CRUD app',
		    priority: 1,
		    date: new Date()
	      },{
	        title: 'Walk dog',
			priority: 4,
			date: new Date()
		  },{
	        title: 'Do dishes',
			priority: 3,
			date: new Date()

		  },{
	        title: '' +
	        'Render Views',
			priority: 2,
			date: new Date()

		  }];

      return knex('todo').insert(todos);

    });
};
