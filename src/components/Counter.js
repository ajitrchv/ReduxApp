import { useSelector, useDispatch } from 'react-redux';
//import { useRef } from 'react';
import classes from './Counter.module.css';

const Counter = () => {

  const dispatch =  useDispatch();
  const counter = useSelector(state => state.counter);
  //const mutateValue = useRef(0);

  const incHandler = () =>{
    dispatch({
      type: 'INC',
    })
  }

  const incrementHandler = () =>{
    dispatch({
      type: 'INCx',
      payload: 5,
    })
    //mutateValue.current.value;
  }

  const decHandler = () =>{
    dispatch({
      type: 'DEC',
    })
  }
  
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>

        <button onClick={decHandler}>-</button>
        {/* <button onClick={incrementHandler}>+5</button> */}
        {/* <input type='number' ref={mutateValue}></input> */}
        <button onClick={incrementHandler}>+ 5</button>
        <button onClick={incHandler}>+</button>
        
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
