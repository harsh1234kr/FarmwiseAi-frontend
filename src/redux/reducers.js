// reducers.js
const initialState = {
  fields: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FIELD':
      return {
        ...state,
        fields: [...state.fields, action.payload],
      };
    case 'CLEAR_FIELDS':
      return {
        ...state,
        fields: [],
      };
    default:
      return state;
  }
};

export default rootReducer;
