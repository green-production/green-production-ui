const authReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN-LOGOUT':
            return !state
        default:
            return state
    }
}

export default authReducer