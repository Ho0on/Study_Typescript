"use strict";
{
    // public
    // private
    // protected
    class CoffeeMaker {
        constructor(coffeeBeans) {
            this.coffeeBeans = 0; // instance (object) level
            this.coffeeBeans = coffeeBeans;
        }
        static makeMachine(coffeeBeans) {
            return new CoffeeMaker(coffeeBeans);
        }
        fillCoffeeBeans(beans) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }
        makeCoffee(shots) {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('NOt enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots,
                hasMilk: false,
            };
        }
    }
    CoffeeMaker.BEANS_GRAMM_PER_SHOT = 7; // class level
    const maker = CoffeeMaker.makeMachine(32);
    maker.fillCoffeeBeans(32);
    class User {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.internalAge = 4;
            this.firstName = firstName;
            this.lastName = lastName;
        }
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
        get age() {
            return this.internalAge;
        }
        set age(num) {
            this.internalAge = num;
        }
    }
    const user = new User('Steve', 'Jobs');
    console.log(user.fullName);
    user.age = 6;
}
