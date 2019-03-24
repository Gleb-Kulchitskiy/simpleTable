import tableActions from './actions';

const initState = [];

export default function tableReducer(state = initState, action) {

  switch (action.type) {
    case tableActions.GET_TABLE_DATA:
      return state;
    case tableActions.INIT_TABLE: {
      return [...action.payload.tableData];
    }
    case tableActions.DELETE_ROW: {
      const idx = state.map(obj => obj.id).indexOf(action.payload.id);
      state.splice(idx, 1);
      return state
    }
    case tableActions.ADD_ROW:{
      console.log('-state-',state)
      return [...state, action.payload]
    }
    default:
      return state;
  }
}