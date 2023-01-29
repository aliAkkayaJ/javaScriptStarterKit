import User from "./user.js"

export default class Customer extends User { //userda olan ortak alanları burada yazmak zorunda kalmam artık extends ile
    constructor(id, firstName, lastName, city, age, creditCardNumber) {
        super(id, firstName, lastName, city, age) //yani burada userdaki yerleri çalıştırır.               
        this.creditCardNumber = creditCardNumber
    }
}