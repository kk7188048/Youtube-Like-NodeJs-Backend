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

