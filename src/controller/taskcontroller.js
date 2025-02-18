const mongoose= require('mongoose')
const {Schema}  = mongoose

const taskSchema = new Schema({
  title: String, 
  
});
const taskModel = mongoose.model('taskPass', taskSchema);


let getTask= async(req, res) => {
 const taskPass= await taskModel.find({})
    res.send(taskPass)
  }

  let creatTask=async(req, res) => {
    console.log(req.body.addTask)
    await taskModel.create({title:req.body.addTask})
    res.send('new task is added')
  }
 
  const deleteTask=async(req,res)=>{
    try{
   const id=req.params.id
   console.log(id)
   const data= await taskModel.findByIdAndDelete(id)
   console.log(data)
   if (data) {
    res.status(200).send('Task deleted successfully')
    } 
    else {
    res.status(404).send('Task not found')
    }
   }
   catch(error){
    res.status(500).send('Error deleting task')
   }
   
  }

  const updateTask = async (req, res) => {
      try {
        const { id } = req.params           
        const { updateTitle } = req.body    
        
      const updatedTask = await taskModel.findById(id) 
        updatedTask.title=updateTitle
        updatedTask.save()
        if (updatedTask) {
          res.status(200).json({ message: "Task updated successfully", updatedTask })
        } else {
          res.status(404).send("Task not found")
         } 
        }
      catch (error) {
        console.error(error)
        res.status(500).send("Error updating task")
      }
    }
  
    
  module.exports={ getTask,creatTask,deleteTask,updateTask}