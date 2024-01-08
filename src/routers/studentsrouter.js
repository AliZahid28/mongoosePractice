const express = require('express')
const router = new express.Router()

const StudentModel = require('../model/student')

//promises
// app.post('/students', (req, res) => {
//     const user = new StudentModel(req.body)
//     user.save().then(() => {
//         res.status(201).send(user)
//     }).catch(err => {
//         res.status(400).send(err)
//     })
// })

router.post('/students', async (req, res) => {
    try {
        const user = new StudentModel(req.body)
        const newData = await user.save()
        res.status(201).send(newData)
    } catch (err) {
        res.status(400).send(err)
    }
})

router.get('/students', async (req, res) => {
    try {
        const allData = await StudentModel.find()
        res.status(200).send(allData)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/students/:_id', async (req, res) => {
    try {
        const { _id } = req.params
        const singleUser = await StudentModel.findById({ _id })
        res.status(200).send(singleUser)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.patch('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const updateStudent = await StudentModel.findByIdAndUpdate(_id, req.body, {
            new: true,
            runValidators: true,
        })
        res.status(200).send(updateStudent)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/students/:id', async (req, res) => {
    try {
        const deleteStudent = await StudentModel.findByIdAndDelete(req.params.id)
        if (!deleteStudent) {
            return res.status(404).send('not found')
        }
        res.status(200).send(deleteStudent)
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router