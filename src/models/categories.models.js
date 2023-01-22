const db = require("../utils/database");
const {DataTypes} = require("sequelize");
const Courses = require("./courses.models");

const Categories = db.define("categories", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
  Name:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  coursesId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "courses_id",
    references:{
      model: Courses,
      key: "id",
    }
  },
},{
  timestamps: false,
});

module.exports = Categories;