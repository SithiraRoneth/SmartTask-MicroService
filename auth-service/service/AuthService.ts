import Auth, {AuthModel} from "../model/AuthModel";
import bcrypt from 'bcrypt'
export async function SaveAuth(auth: AuthModel) {
    const hashPassword = await bcrypt.hash(auth.password, 10);
    try {
        const added = new Auth({
            userName: auth.userName,
            email: auth.email,
            password: hashPassword
        });
        const saved = await added.save();
        console.log("User Saved :", saved);
        return true;
    } catch (err) {
        console.log("Error during Auth Saving : ", err);
    }
}

export async function verifyAuth(auth: Partial<AuthModel>) {
    try{
        const existingUser: AuthModel | null = await Auth.findOne({email:auth.email});

        if (!existingUser){
            console.error("User Not Found");
            return false;
        }
        if (!auth.password){
            console.error("Password is missing in request");
            return false;
        }
        if (!existingUser.password){
            console.error("Stored password is missing");
            return false;
        }
        const isMatch = await bcrypt.compare(auth.password,existingUser.password);
        return isMatch;
    }catch (err){
        console.log("Error during user verification : ", err);
        return false;
    }
}