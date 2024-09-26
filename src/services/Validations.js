export default class Validations {
    static checkEmail(email) {
        if (!email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) { 
            return false;
        }
        return true;
    }
    static minLength(name, minLength) {
        if (name.length < minLength) {
            return false;
        }
        return true;
    }
}