import axios from 'axios'
import { 
    getActiveOrder,
    getOrdersHistory,
    getRestaurantDetail,
    getRestaurants,
    placeOrder,
    removeQuantity,
    setOrder,
    setOrdersHistory,
    setQuantity,
    setRestaurantDetails,
    setRestaurantId,
    setRestaurants
} from './food'

describe('Food actions', () => {

    describe('Actions creators', () => {
        const mockTest = "test"

        it('removeQuantity', () => {
            const mockedAction = removeQuantity(mockTest)

            expect(mockedAction.type).toEqual("REMOVE_QUANTITY")
            expect(mockedAction.payload.itemId).toBeDefined()
            expect(mockedAction.payload.itemId).toEqual(mockTest)
        })

        it('setOrder', () => {
            const mockedAction = setOrder(mockTest)

            expect(mockedAction.type).toEqual("SET_ORDER")
            expect(mockedAction.payload.orderData).toBeDefined()
            expect(mockedAction.payload.orderData).toEqual(mockTest)
        })

        it('setOrdersHistory', () => {
            const mockedAction = setOrdersHistory(mockTest)

            expect(mockedAction.type).toEqual("SET_ORDERS_HISTORY")
            expect(mockedAction.payload.ordersData).toBeDefined()
            expect(mockedAction.payload.ordersData).toEqual(mockTest)
        })

        it('setQuantity', () => {
            const mockedAction = setQuantity(mockTest)

            expect(mockedAction.type).toEqual("SET_QUANTITY")
            expect(mockedAction.payload.infoQuantity).toBeDefined()
            expect(mockedAction.payload.infoQuantity).toEqual(mockTest)
        })

        it('setRestaurantDetails', () => {
            const mockedAction = setRestaurantDetails(mockTest)

            expect(mockedAction.type).toEqual("SET_RESTAURANT_DETAILS")
            expect(mockedAction.payload.restaurantDetails).toBeDefined()
            expect(mockedAction.payload.restaurantDetails).toEqual(mockTest)
        })

        it('setRestaurantId', () => {
            const mockedAction = setRestaurantId(mockTest)

            expect(mockedAction.type).toEqual("SET_RESTAURANT_ID")
            expect(mockedAction.payload.restaurantId).toBeDefined()
            expect(mockedAction.payload.restaurantId).toEqual(mockTest)
        })

        it('setRestaurants', () => {
            const mockedAction = setRestaurants(mockTest)

            expect(mockedAction.type).toEqual("SET_RESTAURANTS")
            expect(mockedAction.payload.restaurantsList).toBeDefined()
            expect(mockedAction.payload.restaurantsList).toEqual(mockTest)
        })       

    })

    describe('Async actions', () => {

        let mockDispatch
        let mockTest
        beforeEach(() => {
            mockDispatch = jest.fn()
            mockTest = "test"
        });

        it('getActiveOrder', async () => {
            axios.get = jest.fn(() => ({ data: { order: mockTest } }))

            await getActiveOrder()(mockDispatch)

            expect(mockDispatch).toHaveBeenCalled()

            expect(mockDispatch).toHaveBeenCalledWith({
                type: "SET_ORDER",
                payload: {
                    orderData: mockTest
                }
            })
        })

        it('getOrdersHistory', async () => {
            axios.get = jest.fn(() => ({ data: { orders: mockTest } }))

            await getOrdersHistory()(mockDispatch)

            expect(mockDispatch).toHaveBeenCalled()

            expect(mockDispatch).toHaveBeenCalledWith({
                type: "SET_ORDERS_HISTORY",
                payload: {
                    ordersData: mockTest
                }
            })
        })

        it('getRestaurantDetail', async () => {
            axios.get = jest.fn(() => ({ data: { restaurant: mockTest } }))

            await getRestaurantDetail()(mockDispatch)

            expect(mockDispatch).toHaveBeenCalled()

            expect(mockDispatch).toHaveBeenCalledWith({
                type: "SET_RESTAURANT_DETAILS",
                payload: {
                    restaurantDetails: mockTest
                }
            })
        })

        it('getRestaurants', async () => {
            axios.get = jest.fn(() => ({ data: { restaurants: mockTest } }))

            await getRestaurants()(mockDispatch)

            expect(mockDispatch).toHaveBeenCalled()

            expect(mockDispatch).toHaveBeenCalledWith({
                type: "SET_RESTAURANTS",
                payload: {
                    restaurantsList: mockTest
                }
            })
        })

        it('placeOrder', async () => {
            // não entendi como testar
        })
        
    })

})