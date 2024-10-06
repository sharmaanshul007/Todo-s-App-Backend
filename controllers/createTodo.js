const Todo = require("../models/Todo");

//step 2 :- define route handler
exports.createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        //create a new todo object and insert into db
        const response = await Todo.create({ title, description });
        //send the json response with a success flag
        res.status(200).json(
            {
                success: true,
                data: response,
                message: "Sucessfully entered the data",
            }
        )
    }
    catch(err){
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:"Data not entered"
        }),
        console.log("Error in data entry"),
        console.log(err)
    }
}