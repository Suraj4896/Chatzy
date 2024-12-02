import { compare } from "bcrypt";
import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";

const maxAge = 3 * 24 * 60 * 60 * 1000;

//creating the token for user, expires in 3 days
const createToken = (email, userId) => {
    return jwt.sign({email, userId}, process.env.JWT_KEY, {expiresIn: maxAge})
};

//signup logic bellow
export const signup = async (request, response, next) => {
    
    try{
        const {email, password} = request.body;
        if(!email || !password){
            return response.status(400).send("Email and password is required");
        }
        const user = await User.create({email, password});
        response.cookie("jwt", createToken(email, user.id), {
            maxAge,
            secure: true,
            sameSite: "None",
        });
        return response.status(201).json({
            user: {
                id: user.id,
                email: user.email,
                profileSetup: user.profileSetup,
            },
        });
    }catch(err){
        console.log({err});
        return response.status(500).send("Internal Server Error");
    }
};

//login logic bellow
export const login = async (request, response, next) => {
    
    try{
        const {email, password} = request.body;
        if(!email || !password){
            return response.status(400).send("Email and password is required");
        }
        const user = await User.findOne({email});
        if(!user){
            return response.status(404).send("User is not found");
        }
        const auth = await compare(password, user.password);
        if(!auth){
            return response.status(400).send("Password is incorrect.");
        }
        response.cookie("jwt", createToken(email, user.id), {
            maxAge,
            secure: true,
            sameSite: "None",
        });
        return response.status(200).json({
            user: {
                id: user.id,
                email: user.email,
                profileSetup: user.profileSetup,
                firstName: user.firstName,
                lastname: user.lastName,
                image: user.image,
                color: user.color
            },
        });
    }catch(err){
        console.log({err});
        return response.status(500).send("Internal Server Error");
    }
};