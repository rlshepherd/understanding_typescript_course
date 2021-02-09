
let userInput: unknown; // unknown is more restrictive than any. 
let userName: string;

userInput = 5;
userInput = 'Max';
// userName = userInput; // this will fail b/c typescript knows the type might not be a string. 

if (typeof userInput === 'string') { // typescript knows about this check. 
    userName = userInput; // now ts allows it. 
}

function generateError(message: string, code: number): never { // never returns a result
    throw {message: message, errorCode: code}
}

generateError('An error occured!', 500); 