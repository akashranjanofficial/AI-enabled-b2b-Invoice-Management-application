

export const initialState = {
  myData: [],
  selected : [],
  searchData : [],
  isSearch : false,
};

export const actions = {
  GET_DATA: "GET_DATA",
  INSERT_DATA: "INSERT_DATA",
  DELETE_SINGLE_DATA: "DELETE__DATA",
  EDIT_DATA: "EDIT_DATA",
  SET_SELECTED : "SET_SELECTED",
  SET_DESELECT : "SET_DESELECT",
  DO_SEARCH : "DO_SEARCH",
  DO_ADVANCE_SEARCH : "DO_ADVANCE_SEARCH",
  SET_IS_SEARCH : "SET_IS_SEARCH",
  REFRESH : "REFRESH",
  SET_AGING_BUCKET : "SET_AGING_BUCKET"
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.GET_DATA:
      return {
        ...state,
        myData: action.payload,
      };

    case actions.INSERT_DATA:
      action.payload.sl_no = parseInt(state.myData[0].sl_no) + 1;
      return {
        ...state,
        myData: [action.payload, ...state.myData],
      };

    case actions.EDIT_DATA:

        state.myData[action.payload.index].cust_payment_terms = action.payload.input.cust_payment_terms
        state.myData[action.payload.index].invoice_currency = action.payload.input.invoice_currency
        return{
            ...state,
      }
    case actions.DELETE_DATA:
      const data = state.myData.filter((id)=> ! action.payload.includes(id.sl_no))
      return{
        ...state,
        myData : data,
        selected : []
      }
   
    case actions.SET_SELECTED:
        return{
            ...state,
            selected : action.payload
        }
    case actions.SET_DESELECT:
        return{
            ...state,
            selected : []
        }
    case actions.DO_SEARCH:
      const dataList = state.myData.filter((row)=> row.cust_number === action.payload)
      return{
        ...state,
        searchData : dataList,
        isSearch : true
      }
    case actions.DO_ADVANCE_SEARCH:
      const result = state.myData.filter((row)=>(
        row.doc_id === action.payload.doc_id &&
        row.cust_number === action.payload.cust_number &&
        row.invoice_id === action.payload.invoice_id &&
        row.buisness_year === action.payload.buisness_year
      ))
      console.log(result)
      return{
        ...state,
        searchData: result,
        isSearch : true
      }
    case actions.SET_IS_SEARCH:
      return{
        ...state,
        isSearch : action.payload
      }
    case actions.REFRESH:
      return{
        ...state,
        isSearch : false,
        selected: []
      }
    case actions.SET_AGING_BUCKET:
      const index = state.myData.findIndex((row)=>row.sl_no === action.payload.sl_no)
      state.myData[index].aging_bucket = action.payload.ag_bucket
      return{
        ...state, 
      }
    default:
      return state;
  }
};
