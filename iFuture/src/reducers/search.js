const initialState = {
    inputSearch: ''
}

const search = (state = initialState, action) => {

    switch(action.type) {

        case 'SET_INPUT_SEARCH':
            return {
                ...state,
                inputSearch: action.payload.inputContent
            }

        default:
            return state
    }
}

export default search