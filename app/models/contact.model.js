const mongoose = require('mongoose');

const schema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Contact name is required"],
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
        },
        address: String,
        phone: String,
        favorite: Boolean,
    },
    { timestamp: true,}
);

// Replace _id with id and remove __V
schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = mongoose.model("contact", schema);