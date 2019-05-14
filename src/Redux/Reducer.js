
import dataPosts from '../Data/data';

const postReducer = function posts(state = dataPosts ,action){
  switch(action.type){
    case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index+1)];
    case 'ADD_POST': return [...state,action.post];
    default: 
     return state;
  }
}

export default postReducer;