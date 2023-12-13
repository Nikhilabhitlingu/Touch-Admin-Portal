const initialState = {
    data: []
   
   };
   
   const searchReducer = (state = initialState, action) => {
    switch (action.type) {
       case 'FETCH_DATA':
         return {
           ...state,
           data: action.payload,
         };
         case 'POST_DATA':
            return {
              ...state,
              data: action.payload,
            };
   
       default:
         return state;
    }
   };
   
   export default searchReducer;