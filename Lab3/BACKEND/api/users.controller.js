import UsersDAO from "../dao/usersDAO.js";

export default class UsersController {
    static async login(req, res) {
        const user = await UsersDAO.login(req.body.username, req.body.id);
        res.json(user);
    } catch(e) {
        res.status(500).json({ error: e.message });
    }
}