const Users = require("./users.models");
const Courses = require("./courses.models");
const Videos = require("./videos.models");

//const Courses = require("./categories.models");
const UsersCourses = require("./users-courses.models");
const Categories = require("./categories.models");

const initModels = () => {

  //hashOne --> tiene uno solo
  //hashMany ---> tiene muchos
  //belongsTo ---> pertenece a
  Categories;
  UsersCourses;

  Users.hasMany(UsersCourses, {as: "user"});
  
  
  UsersCourses.belongsTo(Users, {as: "usersCourses", foreignKey: "user_id"});
  UsersCourses.belongsTo(Courses, {as: "coursesUsers", foreignKey: "courses_id"});


  Courses.hasMany(Videos, {as: "courses"});
  Courses.hasMany(Categories, {as: "categories"});
  Courses.hasMany(UsersCourses, {as: "coursestwo"});

  Videos.belongsTo(Courses, {as: "videos", foreignKey: "course_id"});
  Categories.belongsTo(Courses, {as: "categories", foreignKey: "courses_id"});
}

module.exports = initModels;