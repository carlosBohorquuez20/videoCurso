const UsersServices = require("../services/users.services");

const getAllUsers = async (req, res) => {
  try {
    const result = await UsersServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    
  }
}

const getUserById = async (req, res) => {
 try {
  const {id} = req.params;
  const result = await UsersServices.getById(id)
  res.status(200).json(result);
 } catch (error) {
  
 }
}

const getUserWithCourses = async (rq, res) => {
  try {
    const {id} = req.params;
    const result = await UsersServices.getWithCourses(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const createUser = async (req, res) => {
  try {
    const newUser= req.body;
    const result = await UsersServices.create(newUser)
    res.status(201).json(result);
   } catch (error) {
    res.status(400).json(error.message);
   }
}

const updateUser = async (req, res) => {
  try {
    
    const {id} = req.params;
    
    const result = await UsersServices.update(id)
    res.status(201).json(result);
   } catch (error) {
    res.status(400).json(error.message);
   }

}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  getUserWithCourses,
}