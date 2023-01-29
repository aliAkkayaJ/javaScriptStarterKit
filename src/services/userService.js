import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class UserService { //metot havuzu...export: dışardan kullanılabilr anlamında default:default olarak bunu import et diyor //default demezsen köşeli parantez içinde yazıyor
    constructor(loggerService) {
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    }
    load() {
        for (const user of users) { // for of elimizdeki arrayi dönmeye yarar
            switch (user.type) {
                case "customer":
                    if (!this.checkCustomerValidityForErrors(user)) {
                        this.customers.push(user)
                    }
                    break;
                case "employee":
                    if (!this.checkEmployeeValidityForErrors(user)) {
                        this.employees.push(user)
                    }
                    break;
                default:
                    this.errors.push(new DataError("Wrong User Type", user))
                    break;
            }
        }
    }
    //formik-yup
    checkCustomerValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city".split(" ") //bunları split ile ayrı ayrı array olarak algıladı.Her boşluktan sonrası 1 array elemanı gibi düşün.
        //user["age"] =user.age aynısı
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                this.errors.push(new DataError(`Validation Problem. ${field} is required`, user))
            }
        }
        if (Number.isNaN(Number.parseInt(+user.age))) { //if number is not a number
            hasErrors = true
            this.errors.push(new DataError(`Validation Problem. ${user.age} is not a number`, user))
        }
        return hasErrors;
    }
    checkEmployeeValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city salary".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                this.errors.push(new DataError(`Validation Problem. ${field} is required`, user))
            }
        }
        if (Number.isNaN(Number.parseInt(user.age))) { //if number is not a number
            hasErrors = true
            this.errors.push(new DataError(`Validation Problem. ${user.age} is not a number`, user))
        }
        return hasErrors;
    }
    add(user) {
        switch (user.type) {
            case "customer":
                if (!this.checkCustomerValidityForErrors(user)) {
                    this.customers.push(user)
                }
                break;
            case "employee":
                if (!this.checkEmployeeValidityForErrors(user)) {
                    this.employees.push(user)
                }
                break;
            default:
                this.errors.push(new DataError("This user can not be added.Wrong user type", user))
                break;
        }
        this.loggerService.log(user)
    }
    listCustomers() {
        return this.customers
    }
    getCustomerById(id) {
        return this.customers.find(u => u.id === id)
    }

    getCustomersSorted(){ //sorting algoritması
        return this.customers.sort((customer1,customer2)=>{
            if(customer1.firstName>customer2.firstName){
                return 1; //alfabede önce geliyorsa kazanr dmek
            }else if(customer1.firstName===customer2.firstName){
                return 0;
            }else{
                return -1;
            }
        })
    }

}