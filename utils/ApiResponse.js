class ApiResponse {
    constructor(
        statusCode, data, message = "Sucess"
    ){
        this.statusCode = statusCode
        this.data = data
        this.message=message
        this.sucess = statusCode<400 //if its smaller than 400 its true other wise false
    }
}

export {ApiResponse}

// The Error class is built-in, but here’s its approximate code so we can understand what we’re extending:

// The "pseudocode" for the built-in Error class defined by JavaScript itself
// class Error {
//   constructor(message) {
//     this.message = message;
//     this.name = "Error"; // (different names for different built-in error classes)
//     this.stack = <call stack>; // non-standard, but most environments support it
//   }
// }