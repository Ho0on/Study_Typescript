"use strict";
{
    function printLoginState(state) {
        switch (state.state) {
            case 'loading':
                console.log('👀 loading...');
                break;
            case 'success':
                console.log(`😃 ${state.response.body}`);
                break;
            case 'fail':
                console.log(`😱 ${state.reason}`);
                break;
            default:
                throw new Error(`unknown state: ${state}`);
        }
    }
    printLoginState({ state: 'loading' }); // 👀 loading...
    printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
    printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
