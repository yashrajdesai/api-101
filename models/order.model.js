const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    products: [{
        type: ObjectId,
        ref: Product,
        required: true
    }],
    orderTotal: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now(),
    }
})

module.exports = Order = mongoose.model("orders", orderSchema);