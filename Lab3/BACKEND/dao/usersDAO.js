// Lab06
import { ObjectId } from "mongodb";

let users

export default class UsersDAO {
    static async injectDB(conn) {
        if (users) return;
        try {
            users = await conn.db(process.env.DB_NAME).collection("users");
        } catch (e) {
            console.error(`unable to connect in MoviesDAO ${e}`);
        }
    }
    static async login(username, id) {
        try {
            const user = await users.findOne({ name: username, _id: new ObjectId(id) });
            return {
                _id: user._id,
                name: user.name,
                email: user.email,
            };
        }
        catch (e) {
            console.error(`something went wrong`);
            throw e;
        }
    }

}