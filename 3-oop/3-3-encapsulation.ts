{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	};

	// public
	// private
	// protected
	class CoffeeMaker {
		private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
		private coffeeBeans: number = 0; // instance (object) level

		constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans;
		}

		static makeMachine(coffeeBeans: number): CoffeeMaker {
			return new CoffeeMaker(coffeeBeans);
		}

		fillCoffeeBeans(beans: number);

		makeCoffee(shots: number): CoffeeCup {
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

	const maker = new CoffeeMaker(32);
	maker.coffeeBeans = 3;
	maker.coffeeBeans = -34; // invalid
}
