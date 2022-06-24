import { getAllUsers, home, signup } from "../controllers/auth-controller";


const routes = (app) => {
    app.route('/')
        .get(home);

    app.route('/user')
        .get(getAllUsers)
        .post((req, res, next) => {
            next();
        }, signup);
}

export default routes;