import Validations from "./Validations"

export default class SignUpValidations {
    constructor(email, password) {
        this.email=email;
        this.password=password;
    }

    checkValidations() {
        let errors = [];
        
        if (!Validations.checkEmail(this.email)) {
            errors['email'] = ('Email is not valid');
        }

    if (!Validations.minLength(this.password, 6)) {
        errors['password'] = ('Password should be at least 6 characters long');
    }

    if (!Validations.minLength(this.firstName && this.lastName, 3)) {
        errors['fullName'] = ('Username should be at least 3 characters long');
    }

    return errors;
}

}