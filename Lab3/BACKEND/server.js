import express from 'express';
import cors from 'cors';
import movies from './api/movies.routes.js';
import users from './api/users.route.js';
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/movies", movies);
app.use("/api/v1/users", users);
// express mới áp dụng với mọi route không cần thêm *
app.use((req, res) => {
    res.status(404).json({ error: "not found" })
});
// app.use('*', (req, res) => {
//     res.status(404).json({error: "not found"})
// });
export default app;