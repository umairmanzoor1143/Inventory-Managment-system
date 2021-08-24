import {combineReducers} from 'redux'
import BrandsReduce, {suppliersReduce} from './reducer'

 const rootReducer = combineReducers({
    BrandsReduce,
    suppliersReduce,
    
})
export default rootReducer;