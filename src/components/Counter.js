import { useSelector, useDispatch } from 'react-redux';
//import { useRef } from 'react';
import classes from './Counter.module.css';
import { counterActions } from '../store/index.js'

const Counter = () => {

  const dispatch =  useDispatch();
  const counter = useSelector(state => state.counter);
  //const mutateValue = useRef(0);
  const toggleVal = useSelector(state => state.showCounter )

  const incHandler = () =>{
    dispatch(counterActions.INC());
  }

  const incrementHandler = () =>{
    dispatch(counterActions.INCx(5));
    //mutateValue.current.value;
  }

  const decHandler = () =>{
    dispatch(counterActions.DEC());
  }
  
  const toggleCounterHandler = () => {
    dispatch(counterActions.TOG());
  };

  const buttons = 
  <div>
  <button onClick={decHandler}>-</button>
  {/* <button onClick={incrementHandler}>+5</button> */}
  {/* <input type='number' ref={mutateValue}></input> */}
  <button onClick={incrementHandler}>+ 5</button>
  <button onClick={incHandler}>+</button>
  </div>

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>

      {!toggleVal && buttons}
      
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
