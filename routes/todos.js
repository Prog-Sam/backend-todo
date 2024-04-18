const express = require('express');
const router = express.Router();

// Test data, to emulate model and database calls
let counter = 3;
let testData = [
    { id: 1, task: 'task1', completed: false },
    { id: 2, task: 'task2', completed: false }
];

//skipping middlewares
//added async await to emulate database querying and convention
//no validations for speed
//multiple get
router.get('/', async (req, res) => {
    return await res.status(200).send(testData)
});

//single get
router.get('/:id', async (req, res) => {
    //returning index of data with same id as the parameter
    const index = testData.findIndex(data => data.id == req.params.id);

    return await res
        .status(200)
        .send(
            testData[index]
        );
});

//post data
router.post('/', async (req, res) => {
    let localData = { ...req.body, id: counter };
    counter++;
    testData.push(localData);
    res.status(200).send(localData);
});

//put data
router.put('/:id', async (req, res) => {
    //destructuring body to avoid code polution
    const { task, completed } = req.body;
    //get index
    const index = testData.findIndex(data => data.id == req.params.id);
    //mutation
    testData[index].task = task;
    testData[index].completed = completed;

    return await res.status(200).send(testData);
});

//delete data
router.delete('/:id', async (req, res) => {
    //remove from list if id is equal to parameter id
    const localTestData = testData.filter((data) => data.id != req.params.id);
    testData = [...localTestData];

    return await res.status(200).send(testData);
});

module.exports = router;