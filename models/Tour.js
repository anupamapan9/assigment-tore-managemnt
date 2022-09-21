const mongoose = require("mongoose");
// schema design
const tourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a Name for this tour."],
      trim: true,
      unique: [true, "Name must be unique"],
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name is too large"],
    },
    category: {
      type: String,
      require: true
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    view: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price can't be negative"],
    },
    parsons: {
      type: Number,
      required: true,
      min: [1, "Price can't be negative"],
      max: [5, "Not more than 5"]
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["available", "unavailable"],
        message: "status can't be {VALUE}",
      },
    },
  },
  {
    timestamps: true,
  }
);

// SCHEMA -> MODEL -> QUERY---------------------

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
