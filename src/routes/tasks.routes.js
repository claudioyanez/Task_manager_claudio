const { Router } = require('express');
const { getAllTask, getTask, createTask, deleteTask, updateTsk } =require('../controllers/tasks.controller')

const router = Router();

router.get('/task', getAllTask)

router.get('/task/10', getTask)

router.post('/task', createTask)

router.delete('/task', deleteTask)

router.put('/task', updateTsk)

module.exports = router;