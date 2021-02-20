import formVisibleReducer from './form-visible-reducer';
import kegListReducer from './keg-list-reducer';
import detailKegReducer from './detail-keg-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterKegList: kegListReducer,
  selectedKeg: detailKegReducer
});

export default rootReducer;