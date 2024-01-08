const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Students-Api').then(() => console.log('connected db')).catch((e) => console.log('not connected db'))
//add your data base link 