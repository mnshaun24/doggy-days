const { Schema } = require('mongoose');

const dogSchema = new Schema({
    image: {
        type: String
    },
    breed: {
        type: String
    },
    characteristics: {
        type: String
    },
    life_span: {
        type: String
    },
    weight: {
        type: String
    }
})

module.exports = dogSchema;