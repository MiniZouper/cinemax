const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const userSchema = new mongoose.Schema(
  {
    creditos2: {
     type: Number,
      default: 300,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      select: false,
    },
    role: {
      type: String,
      enum: ["admin", "user"], //asigna los roles que puede tener el usuario
      default: "user",
    },

  },
  {
    timestamps: false, //TODO añade createdAt y updatedAt
    versionKey: false,
  }
);
userSchema.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("user", userSchema);
