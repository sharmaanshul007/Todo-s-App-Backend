const Todo = require("../models/Todo");

//step 2 :- define route handler
exports.deleteTodo = async (req, res) => {
    try {
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);

        res.status(200).json({
            success:true,
            message:"deleted successfully"
        })



    }
    catch(err){
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:"cannot get data by id"
        })
    }
}