import UserModel from "../models/User.Model";
import AsyncHandler from "../utils/AsyncHandler";
import ApiResponse from "../utils/ApiResponse";
import ApiError from "../utils/ApiError";
import { SignUpValidation , SignInValidation } from "../libs/validation";



export const RegisterUser = AsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!(name || email || password)) {
        return res.json(new ApiResponse(400, "Please provide all the required fields"))
    }
    const validateUser = SignUpValidation.safeParse(req.body);
    if (!validateUser.success) {
        return res.json(new ApiResponse(400, "Invalid data"));
    }
    const exisitingUser = await UserModel.findOne({ email });
    if (exisitingUser) {
        return res.json(new ApiError(400, "User already exists"));
    }
    const user = await UserModel.create({ name, email, password });
    await user.save();
    return res.json(new ApiResponse(201, "User created successfully"));

});


export const LoginUser = AsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const validateUser = SignInValidation.safeParse(req.body);
    if (!validateUser.success) {
        return res.json(new ApiResponse(400, "Invalid data"));
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
        return res.json(new ApiError(400, "You Don't have an Account"));
    }    

    
    const isPasswordCorrect = await user.isPasswordCorrect(password);
    if (!isPasswordCorrect) {
        return res.json(new ApiError(400, "Invalid credentials"));
    };
    const token = user.generateToken();
    const validUser = await UserModel.findById(user._id).select("-password");
    console.log(validUser);
    return res.json(new ApiResponse(200, { token, user: validUser }, "Login Successful"));
});


export const LoginWithGoogle = AsyncHandler(async (req, res) => {
    const { email, name, googleId } = req.body;
});