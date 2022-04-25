const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

    const username = req.body.username;
    const Address = req.body.Address;
    const Age = Number(req.body.Age);
    const birthday = Date.parse(req.body.birthday);
    const password = req.body.password;


    const newExercise = new Exercise({
        username,
        Address,
        Age,
        birthday,
        password,
    });



    newExercise.save()
        .then(() => res.json('Customer added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Customer deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.Address = req.body.Address;
            exercise.Age = Number(req.body.Age);
            exercise.birthday = Date.parse(req.body.birthday);
            exercise.password = req.body.password;


            exercise.save()
                .then(() => res.json('Customer updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;