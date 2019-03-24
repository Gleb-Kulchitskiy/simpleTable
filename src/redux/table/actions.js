import fixtures from '../../fixtures/fixtures';

const actions = {
  INIT_TABLE: 'INIT',
  GET_TABLE_DATA: 'GET_TABLE_DATA',
  ADD_ROW: 'ADD_ROW',
  EDIT_ROW: 'EDIT_ROW',
  DELETE_ROW: 'DELETE_ROW',
  init: () => (dispatch) => {
    let tableData = localStorage.getItem('tableData');
    if (!tableData) {
      localStorage.setItem('tableData', JSON.stringify(fixtures));
      dispatch({type: actions.INIT_TABLE, payload: {tableData: fixtures}});
    } else {
      try {
        tableData = JSON.parse(tableData);
      } catch (e) {
        console.log('-error-', e)
      }
      dispatch({type: actions.INIT_TABLE, payload: {tableData}})
    }

  },
  saveToLocalStorage: () => (dispatch, getState) => {
    const {tableData} = getState();
    localStorage.setItem('tableData', JSON.stringify(tableData));
  },
  deleteRow: (id) => ({type: actions.DELETE_ROW, payload: {id}}),
  addRow: (data) => ({type:actions.ADD_ROW, payload:data})
};

export default actions;