import { combineReducers } from "redux"
import userReducers from './userReducers'
import nftReducers from './nftReducers'
import favoritosReducer from './favoritosReducer'

const mainReducer = combineReducers({
    userReducers,
    nftReducers,
    favoritosReducer
})

export default mainReducer