import { combineReducers } from "redux"
import userReducers from './userReducers'
import nftReducers from './nftReducers'
import offerReducers from './offerReducers'
const mainReducer = combineReducers({
    userReducers,
    nftReducers,
    offerReducers
})

export default mainReducer