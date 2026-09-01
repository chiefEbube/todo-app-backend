import express from 'express'
import { 
    getAllTasks, 
    getTask, 
    createTask, 
    updateTask, 
    deleteTask 
} from '../controllers/taskController.js'

const taskRouter = express.Router()

taskRouter.route('/')
.get(getAllTasks)
.post(createTask)

taskRouter.route('/:id')
.get(getTask)
.patch(updateTask)
.delete(deleteTask)

export default taskRouter