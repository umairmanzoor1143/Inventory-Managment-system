import {combineReducers} from 'redux'

import BrandsReduce from '../../components/brand-module/Services/reducer/reducer';
import OutletsReduce from '../../components/Outlets-module/Services/reducer/reducer';
import CetagoriesReduce from '../../components/Cetagories-module/Services/reducer/reducer';
import ProductsReduce from '../../components/Products-module/Services/reducer/reducer';
import AttributesReduce from '../../components/Attributes-module/Services/reducer/reducer';

 const rootReducer = combineReducers({
    BrandsReduce,
    OutletsReduce,
    CetagoriesReduce,
    ProductsReduce,
    AttributesReduce,
})
export default rootReducer;