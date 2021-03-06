const { Schema } = require('mongoose')

const pokeType = new Schema (
    {
        name: { type: String, required: true },
        weaknesses: { type: Array || String , required: true},
        img: { type: String, required: true}
    },
    {timestamps: true}
)

module.exports = pokeType