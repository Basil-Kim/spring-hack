const mongoose = require("mongoose");

const itemSchema = mongoose.Schema;

let Item = new itemSchema(
  {
    itemName: {
      type: String,
      required: [true, "Please add an item name"],
    },
    quantity: {
      type: Number,
      required: [true, "Please add a quantity"],
    },
    dateAdded: {
      type: Date,
      required: [true, "Please indicate the date added to the fridge"],
    },
    dateExpired: {
      type: Date,
      required: false,
    },
    daysToExpire: {
      type: Number,
      required: [true, "Please add number of days until expired"],
    },

    color: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Item", Item);
