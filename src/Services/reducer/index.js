import {combineReducers} from 'redux'
import {suppliersReduce , cetagorysReduce , brandUpdateReduce } from './reducer'
import BrandsReduce from '../../components/brand-module/Services/reducer/reducer';
import OutletsReduce from '../../components/Outlets-module/Services/reducer/reducer';
import CetagorieReduce from '../../components/Cetagories-module/Services/reducer/reducer';

 const rootReducer = combineReducers({
    BrandsReduce,
    suppliersReduce,
    cetagorysReduce,
    OutletsReduce,
    CetagorieReduce,
})
export default rootReducer;