const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const port = process.env.port || 3000;

const courses = [{
        id: 1,
        name: 'course 1'
    },
    {
        id: 2,
        name: 'course 2'
    },
    {
        id: 3,
        name: 'course 3'
    },
    {
        id: 300,
        name: 'course 300'
    },
    {
        id: 700,
        name: 'amber so cute.'
    },
];

app.get('/', (req, res) => res.send('HELLO WORLD'));

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const result = courses.find(c => c.id === parseInt(req.params.id));
    if (!result) return res.status(404).send('not found');
    res.send(result);
});


app.post('/api/courses', (req, res) => {


    const {
        error
    } = validateCourse(req.body); //object destructure
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }


    const target_course = {
        id: courses.length + 1,
        name: req.body.name
    }

    courses.push(target_course);
    res.send(target_course);
});

app.put('/api/courses/:id', (req, res) => {
    const result = courses.find(c => c.id === parseInt(req.params.id));
    if (!result) {
        res.status(404).send('not found');
        return;
    }

    const {
        error
    } = validateCourse(req.body); //object destructing
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    result.name = req.body.name;

    res.send(result);
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);

}

app.delete('/api/courses/:id', (req, res) => {

    // look up the course
    // not existing, return 404
    const result = courses.find(c => c.id === parseInt(req.params.id));
    if (!result) {
        res.status(404).send('404 - not found');
        return;
    }

    //delete
    const index = courses.indexOf(result);
    courses.splice(index, 1);

    //return the same course
    res.send(result);
});


app.listen(port, () => console.log(`EXAMPLE RUN ON PORT ${port}`));