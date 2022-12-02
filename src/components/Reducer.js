const Reducer = ( state, action ) => {
  
switch (action.type) {
  case 'CREATE':
    
  return {
    ...state, trans: [ ...state.trans, action.payload ]
  }

  default:

    return state;
}


};

export default Reducer;
