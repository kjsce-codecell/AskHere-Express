

<h1 align="center">Ask Here Express</h1>

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

Move to the folder

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

- [Expressjs](https://expressjs.com/) - The server for handling and routing HTTP requests
- [Mongoose](https://mongoosejs.com/) - For modeling and mapping MongoDB data to javascript.
- [EJS](https://ejs.co/) - For making Embedded JavaScript templates and generating similar pages using templates.
- [Dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology. 
- [bcrypt](https://www.npmjs.com/package/bcrypt) - A library to help you hash passwords.
- [esm](https://www.npmjs.com/package/esm?activeTab=readme) - The brilliantly simple, babel-less, bundle-less ECMAScript module loader.
- [uuid](https://www.npmjs.com/package/uuid) - It is a secure way to generate cryptographically strong unique identifiers with Node.js that doesn't require a large amount of code
## Application Structure

- `app.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.
- `routes/` - This folder contains the route definitions for our API.
- `config/` - This folder contains configuration for passport as well as a central location for configuration/environment variables.
- `models/` - This folder contains the schema definitions for our Mongoose models.
## Error Handling

In `routes/api/index.js`, we define a error-handling middleware for handling Mongoose's `ValidationError`. This middleware will respond with a 422 status code and format the response to have [error messages the clients can understand](https://github.com/gothinkster/realworld/blob/master/API.md#errors-and-status-codes)
## API Reference

##### Note: Every Request API Call is of POST type.

### saveUserData

Saves user data while registering account

```http
  /api/saveUserData
```

| Request | Request Success     | Request Fail |
| :-------- | :------- | :------------------------- |
| `{name, email, password} ` | `{code: true, data: saved, context: 0, emailExists: false} ` | `{code: true, data: “notSaved”, context: 0, emailExists: true, error: errorMessage} ` |


### loginAccount

It verifies the login details and redirect to dashboard if request is authenticated 

```http
  /api/loginAccount
```

| Request | Request Success     | Request Fail |
| :-------- | :------- | :------------------------- |
| `{email, password} ` | `{code: true, data: “matched”, context: 1, sessionKey, emailExists: true } ` | `{code: false, data: “notMatched”, context: 1, emailExists: ture} ` |

### createForm

When a User creates form,this API saves the form information like form name, form des, form questions, question’s options etc.. 

```http
  /api/createForm
```

| Request | Request Success     | Request Fail |
| :-------- | :------- | :------------------------- |
| `{name, email, password} ` | `{code: true, data: saved, context: 0, emailExists: false} ` | `{code: true, data: “notSaved”, context: 0, emailExists: true, error: errorMessage} ` |

### showFormFill
Client side : Same response as above.

### saveUserData

Saves user data while registering account

```http
  /api/saveUserData
```

| Request | Request Success     | Request Fail |
| :-------- | :------- | :------------------------- |
| `{sessionKey, name, description,questions: [{type: “choice”,title,options: [“hello1”]}` | `{code: true, key: matched, context: 3}` | `{code: false, key: “notMatched”, context: 3, error: errorMessage}  ` |

### showFormData

This API allows the form host can see the form repsonses and details of the filled form by clients 

```http
  /api/showFormData
```

| Request | Request Success     | Request Fail |
| :-------- | :------- | :------------------------- |
| ` {sessionKey, formUID} ` | `{code: true, key: matched, context: 4, formData} ` | `{code: false, key: “matched”, context: 4, error: errorMessage} ` |

### updateForm

API allowws the user to update the form witht he modified details.

```http
  /api/updateForm
```
### getAccountData

API gets the user details like email id and name for the form history

```http
  /api/getAccountData
```
### logoutAccount

Logs out the user from the current session and suspends the current session key.

```http
  /api/logoutAccount
```


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## License

[MIT](https://choosealicense.com/licenses/mit/)
