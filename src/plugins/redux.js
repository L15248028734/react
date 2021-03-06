import {createStore,combineReducers,applyMiddleware,compose} from 'redux';//compose 蹭强器
import thunk from 'redux-thunk'

import banner from '../store/reducers/banner'
import column from '../store/reducers/column'
import detail from '../store/reducers/detail'
import follow from '../store/reducers/follow'
import home from '../store/reducers/home'
import user from '../store/reducers/user'

let rootReducer = combineReducers({banner, column, detail, follow, home, user});

//创建store实例 并导出
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//使用redux-devtools
let store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));//安装了中间件，改装了redux

export default store;