const initialState = {
    user: '',
    users: []
}

const userReducers = (state = initialState, action) => {

    switch (action.type) {
        case 'USER_LOGGED':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGOUT':
            return {
                ...initialState,
            }
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload
            }
        case 'DELETE_USERS':
            return {
                ...state,
                users: state.users.filter(userDB => userDB._id !== action.payload)
            }
        case 'UPDATE_USER':
            return {
                ...state,
                users: state.users.map(user => user._id === action.payload.userId ? { ...user, ...action.payload.body } : user)
            }
        default:
            return state
    }


}

export default userReducers