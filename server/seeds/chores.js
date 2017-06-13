exports.seed = ( knex, Promise ) => {

				let date = new Date();
				let today = date.toLocaleDateString();

				return knex( 'chores' ).del()
				.then(() =>  {
								const chores = [ {
												task: 'Go fishing',
												importanceRating: 1,
												updated_at: today
								}, {
												task: 'Do Dishes',
												importanceRating: 4,
												updated_at: today
								}, {
												task: 'Walk Kela',
												importanceRating: 2,
												updated_at: today
								}, {
												task: 'Go to the store',
												importanceRating: 2,
												updated_at: today
								} ];

								return knex( 'chores' ).insert(chores);

				} );
};
