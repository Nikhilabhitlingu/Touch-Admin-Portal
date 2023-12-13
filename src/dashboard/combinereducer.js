import { combineReducers } from "redux";
import dataReducer from './reducer';
import searchReducer from "../search/reducersearch";
import reportReducer from "../reports/reportsreducer";

const rootReducer = combineReducers({
  data: dataReducer,
  search: searchReducer,
  report:reportReducer,
});

export default rootReducer;