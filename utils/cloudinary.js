const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: "imagedemo",
  api_key: "355361697886157",
  api_secret: "EwaBetpuqxj3WZ8Jyqruq7lkZu4",
  
});

module.exports = cloudinary;