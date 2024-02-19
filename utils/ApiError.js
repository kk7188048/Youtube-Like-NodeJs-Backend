class ApiError extends Error {
  constructor(
    message = "Something went wrong ",
    statusCode,
    errors = [],
    stack = ""
  ) {
    super(message),
      (this.statusCode = statusCode)
      (this.data = null)
      (this.message = message)
      (this.sucess = false)
      this.errors = errors;

      if(stack){
        this.stack=stack
      } else{
        Error.captureStackTrace(this, this.constructor)
        //In the provided code, the stack is an optional parameter in the ApiError constructor, 
        // and if it's not provided when creating an instance of ApiError, the constructor generates and 
        // captures the stack trace using Error.captureStackTrace(this, this.constructor).
        
      }

  }
}

export {ApiError}

// The Error class is built-in, but here’s its approximate code so we can understand what we’re extending:

// The "pseudocode" for the built-in Error class defined by JavaScript itself
// class Error {
//   constructor(message) {
//     this.message = message;
//     this.name = "Error"; // (different names for different built-in error classes)
//     this.stack = <call stack>; // non-standard, but most environments support it
//   }
// }