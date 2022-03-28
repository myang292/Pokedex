const { Schema } = require('mongoose')

const Pokemon = new Schema (
    {
        num: { type: String, required: true },
        name: { type: String, required: true },
        img: { type: String, required: true },
        height: { type: String, required: true },
        weight: { type: String, required: true },
        type: { type: Array || String, required: true },
        weaknesses: { type: Array || String, required: true}
    },
    {timestamps: true}
)

module.exports = Pokemon