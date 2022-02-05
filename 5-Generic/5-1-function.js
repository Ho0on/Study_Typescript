"use strict";
{
    function checkNotNullBAD(arg) {
        //BAD
        if (arg == null) {
            throw new Error('not valid number!');
        }
        return arg;
    }
    const result = checkNotNullBAD(123);
    console.log(result);
    checkNotNullBAD(null);
    function checkNotNull(arg) {
        if (arg == null) {
            throw new Error('not valid number!');
        }
        return arg;
    }
    const number = checkNotNull(123);
    const boal = checkNotNull(true);
}
