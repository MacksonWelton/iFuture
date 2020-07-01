const initialState = {
    user: {},
    userAddress: {}
}

const user = (state = initialState, action) => {

    switch(action.type) {

        case 'SET_PROFILE':
            return {
                ...state,
                user: action.payload.info
            }
        case 'SET_FULL_ADDRESS':
            return {
                ...state,
                userAddress: action.payload.fullAddress
            }
        default:
            return state
    }
}

export default user