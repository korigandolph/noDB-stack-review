const express = require ('express')
const app = express()
const cors = require ('cors')
const port = 3456
const ctrl = require('./controllers/controller')

app.use(express.json())
app.use(cors())

app.get('/api/employees', ctrl.getEmployees)
app.put('/api/employees/:id', ctrl.editEmployee)
app.post('/api/employees', ctrl.addEmployee)
app.delete('/api/employees/:id', ctrl.deleteEmployee)

app.listen(port, () => console.log(`Server listening on ${port}`))