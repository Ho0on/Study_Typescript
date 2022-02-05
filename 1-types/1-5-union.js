"use strict";
{
    function move(direction) {
        console.log(direction);
    }
    move('down');
    const tile = 16;
    function login(id, password) {
        return {
            response: {
                body: 'logged in!',
            },
        };
    }
    //printLoginState(state)
    function printLoginState(state) {
        if ('response' in state) {
            console.log(`😃 ${state.response.body}`);
        }
        else {
            console.log(`😂 ${state.reason}`);
        }
    }
}
