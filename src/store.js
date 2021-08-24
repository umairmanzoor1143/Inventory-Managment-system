import { createStore , applyMiddleware , compose} from "redux";
import thunk from 'redux-thunk'
import rootReducers from './Services/reducer/index'
const Store = createStore(rootReducers, compose(applyMiddleware(thunk),(window.devToolsExtension && process.env.NODE_ENV !== 'production') ?
window.devToolsExtension() : f => f));
export default Store;