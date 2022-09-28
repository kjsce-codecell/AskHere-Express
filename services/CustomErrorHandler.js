class CustomErrorHandler extends Error {
    constructor(status, code) {
        super();
        this.status = status;
        this.message = code;
    }

    static wrongCredentials(message = "Wrong Credentials") {
        return new CustomErrorHandler(401, message);
    }
    static emailExists(message = "Email ID already taken") {
        return new CustomErrorHandler(409, message);
    }
    static serverError(message = "Internal Server Error") {
        return new CustomErrorHandler(500, message);
    }
    static notAuthorized(message = "Not Authorized for Requested Resource") {
        return new CustomErrorHandler(401, message);
    }
    static notFound(message = "404 Resource Not Found") {
        return new CustomErrorHandler(404, message);
    }

}

export default CustomErrorHandler;
