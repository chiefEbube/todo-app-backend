import express from 'express'
import fs from 'node:fs'

const app = express()
const tasks = JSON.parse(fs.readFileSync('./data.json'))
const PORT = 3000

app.use(express.json())

app.get('/api/v1/tasks', (req, res) => {
    res.json({
        status: "success",
        results: tasks.length,
        data: {
            tasks
        }
    })
})

app.get('/api/v1/tasks/:id', (req, res) => {
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
})

app.post('/api/v1/tasks', (req, res) => {
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
})

// To Do:
// Handle PATCH and DELETE requests to /api/v1/tasks/:id


app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`)
})