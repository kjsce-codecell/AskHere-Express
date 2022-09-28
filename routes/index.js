import express from "express";
import { userAccountController } from "../controllers/index.js";
import errorHandler from "../middlewares/errorHandler.js";
const Router = express.Router();

Router.use(errorHandler); // Router-Level Middleware

Router.get('/', (req, res) => {
    res.render('home');
})

Router.post('/api/saveUserData', [], userAccountController.saveUserData);
Router.post('/api/loginAccount', [], userAccountController.loginUser);
Router.post('/api/logoutAccount', [], userAccountController.logoutUser);
// Router.post('/api/createForm', []);
// Router.post('/api/showFormData', []);
// Router.post('/api/showFormFill', []);
// Router.post('/api/updateForm',);
// Router.post('/api/updateForm', []);
// Router.post('/api/getAccountData', [], );
// Router.post('/api/updateAccount', []);
// Router.post('/api/logoutAccount', []);

// askhere/fill/form/frjeigugtt5t4tkrg



export default Router;
