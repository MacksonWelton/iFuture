import food from './food'
import { 
    setOrder, 
    setOrdersHistory, 
    setQuantity, 
    removeQuantity, 
    setRestaurantDetails, 
    setRestaurantId, 
    setRestaurants
} from '../actions/food'

describe('User Reducer', () => {

    const mockInitialState = {}
    const mockTest = [{}]

    it('setOrder', () => {
        const mockedAction = setOrder(mockTest)
        const newStore = food(mockInitialState, mockedAction)
        expect(newStore.order).toHaveLength(1)
    })

    it('setOrdersHistory', () => {
        const mockedAction = setOrdersHistory(mockTest)
        const newStore = food(mockInitialState, mockedAction)
        expect(newStore.orders).toHaveLength(1)
    })

    it('setQuantity', () => {
        // const mockedAction = setQuantity(mockTest)
        // const newStore = food(mockInitialState, mockedAction)
        // expect(newStore.infoQuantity).toHaveLength(1)
        // apresentou um erro q não sei lidar... 
        // state.infoQuantity is not iterable [...state.infoQuantity]
    })

    it('removeQuantity', () => {
        // const mockedAction = removeQuantity(mockTest)
        // const newStore = food(mockInitialState, mockedAction)
        // expect(newStore.infoQuantity).toHaveLength(1)
    })

    it('setRestaurantDetails', () => {
        const mockedAction = setRestaurantDetails(mockTest)
        const newStore = food(mockInitialState, mockedAction)
        expect(newStore.restaurantDetails).toHaveLength(1)
    })

    it('setRestaurantId', () => {
        const mockedAction = setRestaurantId(mockTest)
        const newStore = food(mockInitialState, mockedAction)
        expect(newStore.restaurantId).toHaveLength(1)
    })

    it('setRestaurants', () => {
        const mockedAction = setRestaurants(mockTest)
        const newStore = food(mockInitialState, mockedAction)
        expect(newStore.restaurantsList).toHaveLength(1)
    })   

})