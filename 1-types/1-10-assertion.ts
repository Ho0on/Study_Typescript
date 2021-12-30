{
	// Type Assertions

	function jsStrFunc(): any {
		return 'hello';
	}
	const result = jsStrFunc();
	console.log((result as string).length);

	const wrong: any = 5;
	console.log(object);
}
