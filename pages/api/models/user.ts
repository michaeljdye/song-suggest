import {  DataTypes } from "sequelize";
import { db } from '../db'

export const User = db.define("user", {
  name: DataTypes.TEXT,
  email: DataTypes.TEXT,
  password: DataTypes.TEXT
});