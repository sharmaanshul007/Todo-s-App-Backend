const Todo = require("../models/Todo");

exports.updateTodo = async (req, res) => {
    try {
        const {id} = req.params;
        const {title,description} = req.body;
        const todo = await Todo.findByIdAndDelete(
            {_id:id},
            {title,description,updatedAt:Date.now()}
        )


        res.status(200).json({
            data:todo,
            messasge:"updated successfully",
            success:true,
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:"cannot get data by id"
        })
    }
}