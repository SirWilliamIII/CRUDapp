const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', (req, res) => {
	knex('todo')
	.select()
	.then(todos => {
		res.render('all', { todos: todos });
	});
});

router.get('/:id', (req, res) => {
	const id = req.params.id;
	if(typeof id != 'undefined') {
		knex('todo')
		.select()
		.where('id', id)
		.first()
		.then(todo => {
			res.render('single', todo);
		});
	} else {
		res.status(500);
		res.render('error', {
			message: 'Invalid ID'
		});
	}
});

router.get('/new', (req, res) => {
	res.render('new');
});


function validTodo(todo) {

	return typeof todo.title == 'string'
	  && todo.title.trim() != ''
	  && typeof todo.priority != 'undefined'
	  && !isNaN(Number(todo.priority))
}

router.post('/', (req, res) => {

	if (validTodo(req.body)) {
		const todo = {
			title: req.body.title,
			description: req.body.description,
			priority: req.body.priority,
			date: new Date()
		};
		knex('todo')
			.insert(todo, 'id')
			.then(ids => {
				const id = ids[0];
				res.redirect(`/todo/${id}`);
			});
	} else {
		res.status(500);
		res.render('error', {
			message: 'Invalid TODO'
		});

	}
});



module.exports = router;
