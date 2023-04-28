const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
    switch(action.type){
        case 'increment': 
            return {
                counter: state.counter + 1
            };
        case 'decrement':
            return {
                counter: state.counter - 1
            }
        default: state;
    }
    
};

const store = redux.createStore(counterReducer);

console.log(store.getState());


const counterSubscriber = () => {
    const latestState = store.getState(); // function in redux.createStore that gets the lastest state
    console.log(latestState);
}

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });

