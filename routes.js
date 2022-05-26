const axios = require("axios");

function routes(app){
    app.set("json space", 2)
    app.get("/", (req, res)=>{
        res.send("Welcome to 1-800-flowers server!")
    })
    app.get("/getPosts", (req,res)=>{
        axios.get("http://jsonplaceholder.typicode.com/posts")
            .then(response=>{
                res.json(response.data)
            }).catch(error=>{
                res.json("Oops! An error occurred")
        })
    })
}



module.exports = routes;

