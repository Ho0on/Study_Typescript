"use strict";
{
    function login(id, password) {
        return {
            result: 'success',
            response: {
                body: 'logged in!',
            },
        };
    }
    //printLoginState(state)
    function printLoginState(state) {
        if (state.result === 'success') {
            console.log(`😃 ${state.response.body}`);
        }
        else {
            console.log(`😂 ${state.reason}`);
        }
    }
}
