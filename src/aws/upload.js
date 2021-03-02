const env = require('../config/env');
const fs = require('fs');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
	accessKeyId: env.aws.access_key,
	secretAccessKey: env.aws.secret_key
});

const uploadFile = (fileName) => {
	// Read content from the file
	const fileContent = fs.readFileSync(fileName);

	// Setting up S3 upload parameters
	const params = {
		Bucket: env.aws.bucket_name,
		Key: 'cat.jpg', // File name you want to save as in S3
		Body: fileContent
	};

	// Uploading files to the bucket
	s3.upload(params, function(err, data) {
		if (err) {
			throw err;
		}
		console.log(`File uploaded successfully. ${data.Location}`);
	});
};

module.exports = uploadFile;