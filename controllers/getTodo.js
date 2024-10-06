const Todo = require("../models/Todo");

exports.getTodo = async (req, res) => {
    try {
        //fetch all todo items from database
        const todos = await Todo.find({});

        //response
        res.status(200).json({
            data:todos,
            success:true,
            message:"Entire todo data is fetched",
        });
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:"server not send the data"
        })
    }
}


exports.getTodoById = async(req, res) => {
    try {
        //fetch  todo item from database with the id
        const id = req.params.id;
        const todo = await Todo.findById({_id : id});

        //if data for todo id is not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No data with given id",
            })
        }
        else{
            res.status(200).json({
                data:odo,
                message:`successfully send the item by id:${id}`,
                success:true,
            })
        }
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