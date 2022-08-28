import * as tf from '@tensorflow/tfjs'
//var tf = require('@tensorflow/tfjs')	
tf.loadLayersModel('model.json').then(function(model){
        console.log("Ein Versuch")
        console.log(model)}, function(){})
