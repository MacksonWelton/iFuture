const initialState = {
  restaurantsList: [],
  restaurantDetails: {},
  infoQuantity: [],
  restaurantId: 0,
  selectedFood: [],
  order: {},
  orders: []
}

const food = (state = initialState, action) => {

  switch (action.type) {

    case 'SET_RESTAURANTS':
      return {
        ...state,
        restaurantsList: action.payload.restaurantsList
      }

    case 'SET_RESTAURANT_DETAILS':
      return {
        ...state,
        restaurantDetails: action.payload.restaurantDetails
      }

    case 'SET_RESTAURANT_ID':
      return {
        ...state,
        restaurantId: action.payload.restaurantId
      }

    case 'SET_QUANTITY':
      const copyInfoQuantity = [...state.infoQuantity]
      const productExist = state.infoQuantity.findIndex(product =>
        product.id === action.payload.infoQuantity.id)
      if (productExist > -1) {
        copyInfoQuantity[productExist].quantity += action.payload.infoQuantity.quantity
      } else {
        copyInfoQuantity.push(action.payload.infoQuantity)
      }
      return {
        ...state,
        infoQuantity: copyInfoQuantity
      }

    case 'REMOVE_QUANTITY':
      const newCopyInfoQuantity = [...state.infoQuantity]
      const filtered = newCopyInfoQuantity.filter(product =>
        product.id !== action.payload.itemId)

      return {
        ...state,
        infoQuantity: filtered
      }

    case 'SET_ORDER':
      return {
        ...state,
        order: action.payload.orderData
      }

    case 'SET_ORDERS_HISTORY':
      return {
        ...state,
        orders: action.payload.ordersData
      }

    default:
      return state
  }
}

export default food