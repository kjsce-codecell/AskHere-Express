

<h1 align="center">AskHere (Backend Developed using Node.js, Express & MongoDB)</h1>

<div align="center">

[![GitHub Issues](https://img.shields.io/github/issues/kjsce-codecell/AskHere-Express?style=for-the-badge)](https://github.com/kjsce-codecell/AskHere-Express/issues)
[![Forks](https://img.shields.io/github/forks/kjsce-codecell/AskHere-Express?style=for-the-badge)](https://github.com/kjsce-codecell/AskHere-Express/pull)
[![Stars](https://img.shields.io/github/stars/kjsce-codecell/AskHere-Express?style=for-the-badge)]()

</div>

---

## Run Locally

First, clone the repository

```sh
git clone https://github.com/kjsce-codecell/AskHere-Express
```

Move to the Folder

```sh
cd AskHere-Express
```

Install dependencies:

```sh
npm install
```

Execute the project but running a local server

```sh
npm run dev
```

## Dependencies

- [expressjs](https://expressjs.com/) - The Server File for handling and routing HTTP Requests.
- [mongoose](https://mongoosejs.com/) - For modeling and mapping MongoDB data to Javascript.
- [ejs](https://ejs.co/) - For making Embedded JavaScript Templates and generating similar pages using templates.
- [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads Environment Variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology. 
- [bcrypt](https://www.npmjs.com/package/bcrypt) - A library to help you hash Passwords.
- [esm](https://www.npmjs.com/package/esm?activeTab=readme) - The brilliantly simple, babel-less, bundle-less ECMAScript Module Loader.
- [uuid](https://www.npmjs.com/package/uuid) - It is a secure way to generate Cryptographically Strong Unique Identifiers with Node.js that doesn't require a large amount of Code.

## Application Structure

- `server.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.
- `controllers/` - This folder contains the behaivour for different API calls at different routes.
- `routes/` - This folder contains the route definitions for our API.
- `config/` - This folder contains configuration for Passport as well as a Central Location for Configuration/Environment Variables.
- `models/` - This folder contains the schema definitions for our Mongoose Models.

## Error Handling

In `middlewares/errorHandler.js`, we define a error-handling middleware `errorHandler` in addition with `CustomErrorHandler` at `services/CustomErrorHandler.js`. This middleware will respond with appropriate status code according to request status and format the response to have [error messages the clients can understand](https://github.com/gothinkster/realworld/blob/master/API.md#errors-and-status-codes)
## API Reference

#### Every Request API Call is of `POST` Type.

### saveUserData

Saves user data while registering account

```http
  /api/saveUserData
```

### loginAccount

It verifies the Login Details and redirects to Dashboard if Request is truly authenticated. 

```http
  /api/loginAccount
```

### createForm

When a User creates a Form, this API saves the Form Information like Form Name, Form Description, Form Questions, Question’s Options/Fields, etc.. 

```http
  /api/createForm
```

### showFormFill
Client side : Same response as above.

```http
  /api/showFormFill
```

### saveUserData

Saves user data while registering account

```http
  /api/saveUserData
```

### showFormData

This API allows the Form Host to see the Form Repsonses and Details of the Filled Forms by Clients. 

```http
  /api/showFormData
```

### updateForm

API allowws the user to update the form witht he modified details.

```http
  /api/updateForm
```
### getAccountData

API gets the User Details like Email ID and Name & all Form History.

```http
  /api/getAccountData
```
### logoutAccount

Logs out the User from the Current Session and suspends the current Session Key.

```http
  /api/logoutAccount
```

## Contribution

Contributions are always welcome!

See `CONTRIBUTING.md` for ways to get started.

Please adhere to this project's `Code of Conduct`.

## License

[MIT](https://choosealicense.com/licenses/mit/)
