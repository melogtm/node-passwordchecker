import express from "express";
import { passChecker } from "./func/passChecker.js";

const app = express(); 
const port = 3000; 

let password; 

app.use(express.json()); 

app.post("/validate-password", (req, res) => {
    
    password = req.body.password; 

    const result = passChecker(password); 

    if (result.validation) {
        res.sendStatus(204); 
    } else {
        res.status(404).json({
            error: result.error
        })
    };
});

app.listen(port, () => {
    console.log("API server is on at localhost:" + port); 
});