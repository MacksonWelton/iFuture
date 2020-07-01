import axios from 'axios'
import { baseUrl, getToken } from '../utils/constants'
import { push } from 'connected-react-router'
import { routes } from '../containers/Router'

export const setRestaurants = restaurantsList => ({
  type: 'SET_RESTAURANTS',
  payload: {
      restaurantsList
  }
})

export const getRestaurants = () => async (dispatch) => {
  try {
      const response = await axios.get(`${baseUrl}/restaurants`, {
          headers: {
              auth: getToken()
          }
      })
      const restaurantsList = response.data.restaurants
      dispatch(setRestaurants(restaurantsList))
  } catch (error) {
      console.error(error.message)
      alert("Não foi possível acessar a lista de restaurantes")
  }
}

export const setRestaurantDetails = (restaurantDetails) => ({
    type: 'SET_RESTAURANT_DETAILS',
    payload: {
        restaurantDetails
    }
})

export const getRestaurantDetail = (restaurantId) => async (dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}/restaurants/${restaurantId}`, {
            headers: {
                auth: getToken()
            }
        })
        const restaurantDetails = response.data.restaurant
        dispatch(setRestaurantDetails(restaurantDetails))
        dispatch(push(routes.restaurant))
    } catch (error) {
        console.error(error.message)
        alert("Não foi possível acessar os detalhes do restaurante selecionado")
    }
  }


export const setQuantity = (infoQuantity) => ({
    type: 'SET_QUANTITY',
    payload: {
        infoQuantity
    }
})

export const removeQuantity = (itemId) => ({
    type: 'REMOVE_QUANTITY',
    payload: {
        itemId
    }
})

export const setRestaurantId = (restaurantId) => ({
    type: 'SET_RESTAURANT_ID',
    payload: {
        restaurantId
    }
})

export const setOrder = (orderData) => ({
    type: 'SET_ORDER',
    payload: {
        orderData
    }
})

export const placeOrder = (placeOrderData, restaurantId) => async (dispatch) => {
    try {
        // const response = 
        await axios.post(`${baseUrl}/restaurants/${restaurantId}/order`, 
        placeOrderData, 
        {
            headers: {
                auth: getToken()
            }
        })
        dispatch(push(routes.feed))
    } catch (error) {
        console.error(error.message)
        alert("Não foi possível realizar o pedido")
    }
}

export const getActiveOrder = () => async (dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}/active-order`, 
        {
            headers: {
                auth: getToken()
            }
        })
        dispatch(setOrder(response.data.order))
    } catch (error) {
        console.error(error.message)
        alert("Não foi buscar dados do pedido atual")
    }
}

export const setOrdersHistory = (ordersData) => ({
    type: 'SET_ORDERS_HISTORY',
    payload: {
        ordersData
    }
})

export const getOrdersHistory = () => async (dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}/orders/history`, 
        {
            headers: {
                auth: getToken()
            }
        })
        dispatch(setOrdersHistory(response.data.orders))
    } catch (error) {
        console.error(error.message)
        alert("Não foi buscar dados do pedido atual")
    }
}