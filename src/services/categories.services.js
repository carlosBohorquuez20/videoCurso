const Categories = require("../models/categories.models");
const usersCourses = require("../models/users-courses.models");

class CategoriesServices {
  static async create(categories) {
    try {
      const result = await Categories.create(categories);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const result = await Categories.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = CategoriesServices;