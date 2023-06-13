// ----------------------액션 타입 작성----------------------

export const PLUS_COUNTER = 'counter/PLUS_COUNTER';
export const MINUS_COUNTER = 'counter/MINUS_COUNTER';
export const CLEAR_COUNTER = 'counter/CLEAR_COUNTER';
// 규칙 2번 참고

// ----------------------액션 함수 작성----------------------

export const plusCounter = () => {
  return {
    type: PLUS_COUNTER,
  };
};

export const minusCounter = () => {
  return {
    type: MINUS_COUNTER,
  };
};

export const clearCounter = () => {
  return {
    type: CLEAR_COUNTER,
  };
};

// ----------------------초기 상태 작성----------------------

const initialState = {
  count: 0,
};

// -----------------------리듀서 작성------------------------

function counterReducer(state = initialState, action: { type: string }) {
  switch (action.type) {
    case PLUS_COUNTER:
      return {
        ...state,
        count: state.count + 1,
      };

    case MINUS_COUNTER:
      return {
        ...state,
        count: state.count - 1,
      };

    case CLEAR_COUNTER:
      return {
        count: 0,
      };

    default:
      return state;
  }
}

export default counterReducer;
