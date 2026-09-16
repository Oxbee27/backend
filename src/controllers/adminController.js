const admin = (req, res) => {
    res.status(200).json({
        "status": "success",
        "message": "Welcome, Admin"
    });
};

const user = (req, res) => {
    res.status(200).json({
        "status": "success",
        "message": "Welcome, User"
    });
};

module.exports = {admin, user};