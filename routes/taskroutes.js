const express = require('express')
const router = express.Router()
const { getTask,creatTask,deleteTask,updateTask}=require("../controller/taskcontroller")


router.get('/',getTask )

router.post('/newTask',creatTask )

router.delete('/delete/:id',deleteTask )

router.put('/updated/:id',updateTask)

module.exports=router
