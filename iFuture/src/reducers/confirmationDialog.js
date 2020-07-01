const initialState = {
    dialogOpen: false,
    itemId: 0
}

const confirmationDialog = (state = initialState, action) => {

    switch(action.type) {

        case 'SET_DIALOG':
            return {
                ...state,
                dialogOpen: action.payload.option
            }
        
        case 'SET_ITEM_ID':
            return {
                ...state,
                itemId: action.payload.itemId
            }

        default:
            return state
    }
}

export default confirmationDialog