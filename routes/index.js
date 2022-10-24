import express from "express";
import { userAccountController, userFormController, clientFormController } from "../controllers/index.js";
import errorHandler from "../middlewares/errorHandler.js";
const Router = express.Router();

Router.use(errorHandler); // Router-Level Middleware

Router.get('/', (req, res) => {
    res.render('home');
})

Router.post('/api/saveUserData', [], userAccountController.saveUserData);
Router.post('/api/loginAccount', [], userAccountController.loginUser);
Router.post('/api/logoutAccount', [], userAccountController.logoutUser);
Router.post('/api/createForm', [], userFormController.createForm);
Router.post('/api/showFormData', [], userFormController.showFormData);
Router.post('/api/updateForm', [], userFormController.updateForm);
Router.post('/api/showFormFill', [], clientFormController.showFormFill);
Router.post('/api/getAccountData', [], userAccountController.getUserData);

// Sample Form URL >> askhere/form/dniboginbsuco

export default Router;
