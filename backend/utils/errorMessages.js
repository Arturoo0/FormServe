
class errorMessages {
    static noAssociatedUserCredential(credentialType){
        return {
            error: `No existing user found with that ${credentialType} credential`
        }
    }   

    static foundAssociatedUserCredential(){
        return {
            error: 'Username or email credential already taken'
        }
    }
}

module.exports = errorMessages; 