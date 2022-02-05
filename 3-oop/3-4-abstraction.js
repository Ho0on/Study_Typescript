"use strict";
{
    class CoffeeMachine {
        constructor(coffeeBeans) {
            this.coffeeBeans = 0; // instance (object) level
            this.coffeeBeans = coffeeBeans;
        }
        static makeMachine(coffeeBeans) {
            return new CoffeeMachine(coffeeBeans);
        }
        fillCoffeeBeans(beans) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }
        clean() {
            console.log('cleaning the machine...');
        }
        grindBeans(shots) {
            console.log(`grinding beans for${shots}`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('NOt enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }
        preheat() {
            console.log('heating up...');
        }
        extract(shots) {
            console.log(`Pulling ${shots} shots...`);
            return {
                shots,
                hasMilk: false,
            };
        }
        makeCoffee(shots) {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }
    CoffeeMachine.BEANS_GRAMM_PER_SHOT = 7; // class level
    class AmateurUser {
        constructor(machine) {
            this.machine = machine;
        }
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
        }
    }
    class ProBarista {
        constructor(machine) {
            this.machine = machine;
        }
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(45);
            this.machine.clean();
        }
    }
    const maker = CoffeeMachine.makeMachine(32);
    const amateur = new AmateurUser(maker);
    const pro = new ProBarista(maker);
    pro.makeCoffee();
}
