const { Router } = require("express");
const Users = require("../models/users.models");
//const {getAllUsers, getUserById, createUser, updateUser, getUserWithCourses} = require("../controllers/users.controller")
const router = Router();
const{
    getAllUsers,
    getUserById, 
    createUser, 
    updateUser,
    getUsersCoursesByIdWhitCourses,
    addCourseToUser,
    getUserWithCourses,
}
= require('../controllers/users.controller');

//localhost:8000/users
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);

router.get("/users/:id/courses", getUserWithCourses);


router.post("/users", createUser);

router.put("/users/:id", updateUser);




module.exports = router;