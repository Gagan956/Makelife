const mongoose = require("mongoose");

const AvailSchema = new mongoose.Schema({
	name: String,
	bloodgrp: String,
	duration: Number
});

module.exports = mongoose.model("Avail",AvailSchema);