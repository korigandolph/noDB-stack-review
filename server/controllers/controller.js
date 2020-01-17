const employees = require('../data.json')
let id = 21

module.exports = {
    getEmployees: (req, res) => {
        res.status(200).send(employees)
    },

    editEmployee: (req, res) => {
        const {id} = req.params
        const index = employees.findIndex(person => person.id === +id)
        employees.splice(index, 1, req.body)
        console.log(employees)
        res.status(200).send(employees)
    },

    addEmployee: (req, res) => {
        console.log('req.body', req.body)
        const {firstName, lastName, email, gender} = req.body
        const newEmployee = {
            id,
            firstName,
            lastName,
            email,
            gender
        }
        id++
        employees.push(newEmployee)
        res.status(200).send(employees)
    },

    deleteEmployee: (req, res) => {
        const {id} = req.params
        const index = employees.findIndex(person => person.id === +id)
        employees.splice(index, 1)
        console.log(employees)
        res.status(200).send(employees)
    }
}