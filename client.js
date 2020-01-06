import './aws-sdk-js/dist/aws-sdk.js';
AWS = window.AWS;
delete window.AWS;

module.exports = { AWS }