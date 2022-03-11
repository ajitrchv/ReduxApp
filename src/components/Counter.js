import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {

  const dispatch =  useDispatch();
  const counter = useSelector(state => state.counter);

  const incHandler = () =>{
    dispatch({
      type: 'INC',
    })
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
        <button onClick={incHandler}>+</button>
        
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
