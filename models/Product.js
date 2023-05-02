import mongoose, { models } from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 60,
    },
    desc: {
        type: String,
        required: true,
        maxlength: 200,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
}, { timestamps: true }
)

const Product = models.Product || mongoose.model("Product", productSchema);

export default Product;