import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules/rootReducer';
import { plusCounter, minusCounter, clearCounter } from '../modules/counter';
function Counter() {
  const count = useSelector((state: RootState) => state.counterReducer.count);
  const dispatch = useDispatch(); // 디스패치 함수를 가져옵니다

  // 각 액션들을 디스패치하는 함수들을 만들어줍니다
  const onIncrease = () => {
    dispatch(plusCounter());
  };

  const onDecrease = () => {
    dispatch(minusCounter());
  };

  const onClear = () => {
    dispatch(clearCounter());
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={onClear}>clear</button>
    </div>
  );
}

export default Counter;
