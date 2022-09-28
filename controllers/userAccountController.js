import { CustomErrorHandler } from "../services/index.js";
import bcrypt from 'bcrypt';
import { User, SessionKeys } from '../models/index.js';
const {v4 : uuidv4} = require('uuid')

const userAccountController = {
   async saveUserData(req, res, next) {
      const { name, email, password } = req.body;
      if (!name || !email || !password) return res.json({code: false, data: "notSaved", context: 0, emailExists: false, error: "Void Entries Provided"});
      try {
            const sameEmail = await User.exists({email});
            if (sameEmail) {
                return res.json({code: false, data: "notSaved", context: 0, emailExists: true});
                // return next(CustomErrorHandler.emailExists("Email ID already exists"));
            }
      } catch(error) {
          return next(CustomErrorHandler.serverError(error.message));
          return res.json({code: false, data: "notSaved", context: 0, emailExists: false, error});
      }
      
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const user = new User({
          name, email, password: hashedPassword
      });

      let saveUser;
      try {
          saveUser = await user.save();
      } catch(error) {
        //   return next(error);
          return res.json({code: false, data: "notSaved", context: 0, emailExists: false, error: error});
      }

      res.status(200).json({code: true, data: "saved", context: 0, emailExists: false});
   },

   async loginUser(req, res, next) {
    const { email, password } = req.body;
    if (!email || !password) return res.json({code: false, data: "notMatched", context: 1, emailExists: false, error: "Void Entries Provided"});

    let userData;
    try {
          const sameEmail = await User.exists({email});
          userData = await User.findOne({email});
          if (!sameEmail) {
              return res.json({code: false, data: "notMatched", context: 1, emailExists: false})
              // return next(CustomErrorHandler.emailExists("Email ID already exists"));
          }
    } catch(error) {
        // return next(CustomErrorHandler.serverError(error.message));
        return res.json({code: false, data: "notSaved", context: 1, emailExists: false, error});
    }
    
        const userAuth = await bcrypt.compare(password, userData.password);
        if (!userAuth) {
            // return next(CustomErrorHandler.wrongCredentials("Wrong Password"));
            return res.json({code: false, data: "notMatched", context: 1, emailExists: true, error: "Wrong Password"});
        }
        // const sessionKey = Date.now()-Math.round(Math.random()*1E11)+Math.round(Math.random()*1E6);
        const sessionKey = uuidv4();
        const user = new SessionKeys ({
            email, sessionKey: sessionKey
        });
  
        let saveKey;
        try {
            saveKey = await user.save();
        } catch(error) {
        //   return next(CustomErrorHandler.serverError(error));
            return res.json({code: false, data: "notSaved", context: 1, emailExists: false, error: error});
        }

    res.status(200).json({code: true, data: "matched", context: 1, sessionKey, emailExists: true});
    },

    async logoutUser(req, res, next) {
        const { sessionKey } = req.body;
        if (!sessionKey) return res.json({code: false, data: "notMatched", context: 1, emailExists: false, error: "Void Entries Provided"});
      
            let saveKey;
            try {
                saveKey = await SessionKeys.findOneAndDelete({sessionKey});
            } catch(error) {
            //   return next(CustomErrorHandler.serverError(error));
                return res.json({code: false, data: "notSaved", context: 2, emailExists: true, error: error});
            }
    
        res.status(200).json({code: true, data: "matched", context: 2, emailExists: true});
        }
}

export default userAccountController;
