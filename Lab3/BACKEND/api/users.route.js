import express from 'express';
import UsersController from "./users.controller.js";

const router = express.Router();

router.route('/login').post(UsersController.login);

export default router;