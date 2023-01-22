const db = require("../utils/database");
const {DataTypes} = require("sequelize");
const Courses = require("./courses.models");

const Videos = db.define("videos", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
  title:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  url:{
    type: DataTypes.STRING,
    allowNull: false,
    unique:true,
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

module.exports = Videos;