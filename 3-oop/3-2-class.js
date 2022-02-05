"use strict";
{
    class CoffeeMaker {
        constructor(coffeeBeans) {
            this.coffeeBeans = 0; // instance (object) level
            this.coffeeBeans = coffeeBeans;
        }
        static makeMachine(coffeeBeans) {
            return new CoffeeMaker(coffeeBeans);
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
    const maker = new CoffeeMaker(32);
    console.log(maker);
    const maker2 = new CoffeeMaker(14);
    console.log(maker2);
    CoffeeMaker.makeMachine(22);
}
