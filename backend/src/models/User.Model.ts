import mongoose, { Schema, Document } from "mongoose";
import mongooseAggregate from 'mongoose-aggregate-paginate-v2';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
enum UserRole {
    USER = 'user',
    SELLER = 'seller'
}

interface User extends Document {
    profileImg: string;
    name: string;
    email: string;
    address: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    role: UserRole;
    orders: Schema.Types.ObjectId[];
    isPasswordCorrect(password: string): Promise<boolean>;
    generateToken(): string;
}

const UserSchema: Schema<User> = new Schema<User>({
    profileImg: { type: String, default: "https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, },
    password: { type: String, required: true },
    role: { type: String, enum: Object.values(UserRole), default: UserRole.USER },
    orders: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
}, { timestamps: true });

UserSchema.plugin(mongooseAggregate);

UserSchema.pre<User>('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

UserSchema.methods.isPasswordCorrect = async function (password: string) {
    return await bcrypt.compare(password, this.password);
};

UserSchema.methods.generateToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET as string);
};

const UserModel = mongoose.model<User>("User", UserSchema);

export default UserModel;
