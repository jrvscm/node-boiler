'use strict';
exports.DATABASE_URL = 
	process.env.DATABASE_URL ||
	global.DATABASE_URL ||
	'mongodb://localhost/NEWDB';	
exports.CLIENT_ORIGIN = 
	process.env.CLIENT_ORIGIN ||
	global.CLIENT_ORIGIN ||
	'localhost:3000'
exports.TEST_DATABASE_URL = 
	process.env.TEST_DATABASE_URL ||
	global.TEST_DATABASE_URL ||
	'mongodb://localhost/NEWDBTESTDB';				   
exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET; //if were using jwt auth
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';