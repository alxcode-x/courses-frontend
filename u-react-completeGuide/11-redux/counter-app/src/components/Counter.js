import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  const toggleCounterHandler = () => {
    dispatch({ type: 'TOGGLE' })
  };

  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT', amount: 2 });
  }

  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT', amount: 1 });
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && (
        <div>
          <div className={classes.value}>{counter}</div>
          <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
          </div>
        </div>)
      }
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class-based implementation
// import {connect } from 'react-redux';
// import { Component } from 'react';

// class Counter extends Component {
//   toggleCounterHandler() {}

//   incrementHandler() {
//     this.props.increment({ type: 'INCREMENT' });
//   }

//   decrementHandler() {
//     this.props.decrement({ type: 'DECREMENT' });
//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//     return {
//       counter: state.counter
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({type: 'INCREMENT'}),
//     decrement: () => dispatch({type: 'DECREMENT'}),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);