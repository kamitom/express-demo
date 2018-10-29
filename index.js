const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const port = process.env.port || 3000;

const courses = [
    {id: 1, name: 'course 1'},
    {id: 2, name: 'course 2'},
    {id: 3, name: 'course 3'},
    {id: 300, name: 'course 300'},
    {id: 700, name: 'course 700'},
];

app.get('/', (req, res) => res.send('HELLO WORLD'));

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const result = courses.find(c => c.id === parseInt(req.params.id));
    if (!result) res.status(404).send('not found');
    res.send(result);
});


app.post('/api/courses', (req, res) => {
    const schema = {
        name_abc: Joi.string().min(3).required()
    }
    const result = Joi.validate(req.body, schema);
    // console.log(result);

    if (result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name_abc
    }

    courses.push(course);
    res.send(course);
});


app.listen(port, ()=> console.log(`EXAMPLE RUN ON PORT ${port}`));