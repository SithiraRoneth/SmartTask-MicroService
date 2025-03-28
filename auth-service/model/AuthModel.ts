import mongoose, {Schema, Document} from "mongoose";

interface AuthModel extends Document {
    userName?: string;
    email: string;
    password: string;
}

const AuthSchema: Schema<AuthModel> = new Schema(
    {
        userName: {
            type: String,
            required: [true, "Please enter User Name"],
            trim: true
        },
        email: {
            type: String,
            required: [true, "Please enter email"],
            unique: true,
            lowercase: true,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
        },
        password: {
            type: String,
            required: [true, "Please Enter Password"],
            trim: true
        },
    },
    {
        timestamps: true,
    }
);

const Auth = mongoose.model<AuthModel>("Auth",AuthSchema);

export default Auth;
export {AuthModel};