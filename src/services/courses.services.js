const Courses = require("../models/courses.models");
const usersCourses = require("../models/users-courses.models");
const Categories = require("../models/categories.models");

class CoursesServices {
  static async getAll() {
    try {
      const result = await Courses.findAndCountAll({
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const result = await Courses.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }



  static async create(course) {
    try {
      const result = await Courses.create(course);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, field) {
    try {
      const result = await Courses.update(field, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAllCWhitCWhitV(id) {
    try {
      const result = await Courses.findOne( {
        where: { id },
        include: [
          { model: Categories, 
            as: "categories",
            attributes: [ "name"]
          },
          { model: Videos,
            as: "videos",
            attributes: [ "title", "url"]
          }
        ]
      })
      return result;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = CoursesServices;