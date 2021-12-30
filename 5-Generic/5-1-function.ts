{
	function checkNotNullBAD(arg: number | null): number {
		//BAD
		if (arg == null) {
			throw new Error('not valid number!');
		}
		return arg;
	}
	const result = checkNotNullBAD(123);
	console.log(result);
	checkNotNullBAD(null);

	function checkNotNull<T>(arg: T | null): T {
		if (arg == null) {
			throw new Error('not valid number!');
		}
		return arg;
	}
	const number = checkNotNull(123);
	const boal: boolean = checkNotNull(true);
}
