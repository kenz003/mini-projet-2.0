// Importer la classe validations depuis validation.js
import Validations from './Validations';

// Exporter la classe LoginValidations
export default class LoginValidations {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    checkValidation (){
        //email validations
        let errors = [];
        // Utiliser la classe Validations importée pour appeler les méthodes de validation
        if(!Validations.checkEmail(this.email)){
            errors['email']='invalid email';
        }
        //password validation 
        if(!Validations.minLength(this.password, 6)){
            errors['password']='password should be of 6 characteres'
        }
        return errors;
    }
}
