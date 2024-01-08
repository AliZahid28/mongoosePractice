// mongoose practice 

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Test')
    .then(() => console.log('successfully connected ......'))
    .catch(err => console.log('error at connection -----', err))


const detailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error('Price should be Positive')
            }
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const DetailModel = new mongoose.model('Detail', detailSchema)

const createDocument = async () => {
    try {
        const dataNew = new DetailModel({
            name: 'New 1',
            price: -120,
        })
        const result = await DetailModel.insertMany([dataNew])
        console.log('data =====', result)
    } catch (err) {
        console.log('error =====', err)
    }
}

const readDocument = async () => {
    try {
        const result = await DetailModel.find()
        console.log('result ===', result)
    } catch (err) {
        console.log('err ====', err)
    }
}

const updateDocument = async () => {
    try {
        const updateresult = await DetailModel.findByIdAndUpdate({ _id: '659545078801509bbfae5e15' }, {
            $set: { price: 250 }
        }, {
            new: true

        })
        console.log(updateresult)
    } catch (err) {
        console.log('error =====', err)

    }
}

const deleteDocument = async () => {
    try {
        const deletedData = await DetailModel.deleteOne({ _id: '65954035bebf61dd20282b92' })
        console.log(deletedData)
    } catch (err) {
        console.log('error =====', err)

    }
}

// deleteDocument()

// createDocument()
// readDocument()
// updateDocument()
