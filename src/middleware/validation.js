const jwt = require("jsonwebtoken");

const register = (req, res, next) => {
   const {name, password} = req.body;

   if(name.length < 1 || password.length < 1) {
        return res.status(400).json({
        "status": "error",
        "message": "Name and password are required"
        }) 
   }

   if(name.length < 4 || password.length < 6){
    return res.status(400).json({
        "status": "error",
        "message": "Name must be at least 4 characters and password must be at least 6 characters"
    })
   } 

   if(name != "devv" || password != "devv1234"){
    return res.status(401).json({
        "status": "error",
        "message": "Invalid name or password"
    })
   } else {

    console.log(`User ${name} your account was registered successfully`);   
    return res.status(200).json({
        "status": "success",
        "message": "User registered successfully"
    })
   }

  next();
};

const users = [
    {id: 1, name: "devv", role: "user", password: "devv1234"},
    {id: 2, name: "john", role: "user", password: "john1234"},
    {id: 3, name: "jane", role: "admin", password: "jane1234"}
   ]


const login = (req, res, next) => {
    const {name, password} = req.body || {};

    // if (!name || !password || String(name).trim().length < 1 || String(password).trim().length < 1) {
    //     return res.status(400).json({
    //         status: "error",
    //         message: "Name and password are required"
    //     });
    // }

    const user = users.find((u) => u.name === String(name).trim() && u.password === String(password).trim());

    if (!user) {
        return res.status(401).json({
            status: "error",
            message: "Invalid name or password"
        });
    }

    if (!process.env.JWT_SECRET) {
        return res.status(500).json({
            status: "error",
            message: "JWT secret is not configured"
        });
    }

    const token = jwt.sign(
        {id: user.id, role: user.role, name: user.name},
        process.env.JWT_SECRET,
        {expiresIn: "1h"}
    );

    return res.status(200).json({
        status: "success",
        message: "Login successful",
        role: user.role,
        token: token
    });
};

module.exports = {register, login};