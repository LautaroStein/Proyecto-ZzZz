import { combineReducers } from "redux"
import userReducers from './userReducers'
import nftReducers from './nftReducers'

const mainReducer = combineReducers({
    userReducers,
    nftReducers
})

export default mainReducer