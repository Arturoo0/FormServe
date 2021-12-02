
const generateErrorMessage = (errorMessage) => {
    return {
        error: errorMessage
    };
};

const noAssociatedUserCredential = (credentialType) => {
    return generateErrorMessage(`No existing user found with that ${credentialType} credential`); 
}   

const foundAssociatedUserCredential = () => {
    return generateErrorMessage('Username or email credential already taken');
}

const credentialMismatchProvided = () => {
    return generateErrorMessage('Provided user credentials present a mismatch')
}

module.exports = {
    noAssociatedUserCredential,
    foundAssociatedUserCredential,
    credentialMismatchProvided 
};