
const Users = require("../models/users.models");
const Courses = require("../models/courses.models");

class UsersServices {
  static async getAll(){
    try {
      const result = await Users.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id){
    try {
      const result = await Users.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getWithCourses(id) {
    try {
      const result = await Users.findOne({
        where: {id},
        attributes:{
          exclude:["password"],
        },  
        include:{
          model:Courses,
          as: "courses",
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(user){
    try {
      const result = await Users.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async update(id, field) {
    try {
        const result = await Users.update(field, { where: { id } });
        return result;
    } catch (error) {
        throw error;            
    }
}

static async addCourseToUser(newCourseUser) {
    try {
        const result = await UserCourses.create(newCourseUser);
        return result;
    } catch (error) {
        throw error;
    }
}
};



module.exports = UsersServices;