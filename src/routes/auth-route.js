import { getAllUsers, home, login, signup } from "../controllers/auth-controller";
import jwt from 'jsonwebtoken'


const routes = (app) => {
    app.route('/')
        .get(home);

    app.route('/user')
        .get(ensureToken, getAllUsers)
        .post((req, res, next) => {
            next();
        }, signup);

    app.route('/auth')
        .post((req, res, next) => {
            next();
        }, login);
}


function ensureToken(req, res, next) {
    // check for valid token 

    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

export default routes;