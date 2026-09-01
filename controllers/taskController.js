import fs from 'node:fs'

const tasks = JSON.parse(fs.readFileSync('./data.json'))


const getAllTasks =  (req, res) => {
    res.json({
        status: "success",
        results: tasks.length,
        data: {
            tasks
        }
    })
}

const getTask =  (req, res) => {
    const paramsId = req.params.id
    const task = tasks.find(task => task.id === paramsId)

    if (!task) {
        return res.status(404).json({
            status: 'fail',
            message: 'Bad request: Invalid ID'
        })
    }

    res.status(200).json({
        status: "success",
        data : {
            task
        }
    })
}

const createTask = (req, res) => {
    const newTaskId = Number(tasks[tasks.length - 1].id) + 1
    const newTask = Object.assign({id: newTaskId}, req.body)

    tasks.push(newTask)
    fs.writeFile('./data.json', JSON.stringify(tasks), err => {
        res.status(201).json({
            status: 'success',
            data: {
                task: newTask
            }
        })
    })
}

const updateTask = (req, res) => {
     if (Number(req.params.id) > tasks.length - 1) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        })
    }

    res.status(200).json({
        status: 'success',
        data: {
            task: 'Updated task here'
        }
    })
}

const deleteTask = (req, res) => {
     if (Number(req.params.id) > tasks.length - 1) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        })
    }

    res.status(204).json({
        status: 'success',
        data: null
    })
}


export {getAllTasks, getTask, createTask, updateTask, deleteTask}