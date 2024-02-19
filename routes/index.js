const express = require('express');
const router = express.Router();

const Recipient = require('../models/recipient');
const Donor = require('../models/donor');
const Hospital = require('../models/hospital');
const Avail = require('../models/avail');

router.get("/",function(req,res){
	res.render("index.ejs");
});

router.get("/recipients",function(req,res){
	Recipient.find({}, function(err,recipients){
	if(err)
		console.log(err);
	else
		res.render("./recipient/show_recipients.ejs", {recipients: recipients});
	});
});



router.get("/donors",function(req,res){
	Donor.find({}, function(err,donors){
	if(err)
		console.log(err);
	else
		res.render("donor/show_donors.ejs", {donors: donors});
	});
});



router.get("/hospitals",function(req,res){
	Hospital.find({}, function(err,hospitals){
	if(err)
		console.log(err);
	else
		res.render("hospital/show_hospitals.ejs", {hospitals: hospitals});
	});
});


router.get("/status",function(req,res){
	Avail.find({}, function(err,organs){
	if(err)
		console.log(err);
	else
		res.render("./hospital/status", {organs: organs});
	});
});

router.get("/hospitals_status",function(req,res){
	Avail.find({}, function(err,organs){
	if(err)
		console.log(err);
	else
		res.render("./hospital/status_hospitals", {organs: organs});
	});
});

router.get("/avail",function(req,res){
	res.render("./hospital/avail.ejs");
});

router.post("/hospitals_status",function(req,res){
	const name = req.body.name;
	const bloodgrp = req.body.bloodgrp;
	const duration = req.body.duration;
	
	Avail.create({
			name: name,
			bloodgrp: bloodgrp,
			duration: duration
		},function(err,organ){
		if(err)
			console.log(err);
		else
			res.redirect("/hospitals_status");
	});
});

module.exports = router;