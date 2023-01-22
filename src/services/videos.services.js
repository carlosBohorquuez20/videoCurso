const Videos = require("../models/videos.models");
const usersCourses = require("../models/users-courses.models");

class VideosServices {
  static async create(videos) {
    try {
      const result = await Videos.create(videos);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const result = await Videos.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = VideosServices;