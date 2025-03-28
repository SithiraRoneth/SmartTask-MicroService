import Auth, {AuthModel} from "../model/AuthModel";
// @ts-ignore
import bcrypt from 'bcrypt'
export async function SaveAuth(auth: AuthModel) {
    const hashPassword = bcrypt.hash(auth.password, 10);
    try {
        const added = new Auth({
            userName: auth.userName,
            email: auth.email,
            password: hashPassword
        });
        const saved = await Auth.create(added);
        console.log("User Saved :", saved);
        return true;
    } catch (err) {
        console.log("Error during Auth Saving : ", err);
    }
}