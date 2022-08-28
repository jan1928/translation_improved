//import * as tf from '@tensorflow/tfjs';
//import * as tf from '@tensorflow/tfjs'
var tf = require('@tensorflow/tfjs')
///tf = require('@tensorflow/tfjs-node')
//require('util').shim()
//require('util.promisify').shim()
tf.loadLayersModel('model.json').then(function(model){
	console.log(model)})
console.log("Hallo aus background.js")

