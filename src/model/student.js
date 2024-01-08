const mongoose = require('mongoose')
const validator = require('validator')


const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'Email already present'],
        validate(val) {
            if (!validator.isEmail(val)) {
                throw new Error('Invalid Email')
            }
        }
    },
    phone: {
        type: Number,
        required: true,
        min: 10, 
        unique: true
    },
    address: {
        type: String,
        required: true
    }

})

const StudentModel = new mongoose.model('Student', studentSchema)

module.exports = StudentModel