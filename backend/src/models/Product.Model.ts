import mongoose, { Schema, Document } from "mongoose";

enum Category {
    T_SHIRTS = "t-shirts",
    STICKERS = "stickers",
    MERCHANDISE = "merchandise"
}

interface Product extends Document {
    name: string;
    price: number;
    image: string;
    title:string;
    description: string
    quantity: number;
    category: Category;
    createdAt: Date;
    updatedAt: Date;
    seller: Schema.Types.ObjectId;
}

const ProductSchema: Schema<Product> = new Schema<Product>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    quantity: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, enum: Object.values(Category), required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    seller: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

const ProductModel = mongoose.model<Product>("Product", ProductSchema);

export default ProductModel;
