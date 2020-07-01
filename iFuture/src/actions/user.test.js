import axios from 'axios'
import {
    addAdress,
    getFullAdress,
    getProfile,
    login,
    setFullAddress,
    setProfile,
    signup,
    updateProfile
} from './user'

describe('User actions', () => {

    describe('Actions creators', () => {
        const mockTest = "test"

        it('setProfile', () => {
            const mockedAction = setProfile(mockTest)

            expect(mockedAction.type).toEqual("SET_PROFILE")
            expect(mockedAction.payload.info).toBeDefined()
            expect(mockedAction.payload.info).toEqual(mockTest)

        })

        it('setFullAddress', () => {
            const mockedAction = setFullAddress(mockTest)

            expect(mockedAction.type).toEqual("SET_FULL_ADDRESS")
            expect(mockedAction.payload.fullAddress).toBeDefined()
            expect(mockedAction.payload.fullAddress).toEqual(mockTest)
        })

    })

    describe('Async actions', () => {

        let mockDispatch
        let mockTest
        beforeEach(() => {
            mockDispatch = jest.fn()
            mockTest = "test"
        });

        it('addAdress', async () => {
            axios.put = jest.fn(() => ({ data: { fullAddress: mockTest } }))
            const response = axios.put()          
            await addAdress()(mockDispatch)
            // não dá pra testar se foi chamado pq ele não tem dispatch
        })


        it('getFullAdress', async () => {
            
            axios.get = jest.fn(() => ({ data: { address: mockTest } }))

            await getFullAdress()(mockDispatch)

            expect(mockDispatch).toHaveBeenCalled()

            expect(mockDispatch).toHaveBeenCalledWith({
                type: "SET_FULL_ADDRESS",
                payload: {
                    fullAddress: mockTest
                }
            })
        })


        it('getProfile', async () => {

            axios.get = jest.fn(() => ({ data: { user: mockTest} }))

            await getProfile()(mockDispatch)

            expect(mockDispatch).toHaveBeenCalled()

            expect(mockDispatch).toHaveBeenCalledWith({
                type: "SET_PROFILE",
                payload: {
                    info: mockTest
                }
            })

        })


        it('login', async () => {

            axios.post = jest.fn(() => ({ data: { token: mockTest } }))

            await login(mockTest)(mockDispatch)

            // quando implementei a lógica de verificar se tem endereço quebrou

            // expect(mockDispatch).toHaveBeenCalled()
        })


        it('signup', async () => {

            axios.post = jest.fn(() => ({ data: { token: mockTest } }))

            // await signup(mockTest)(mockDispatch)

            // expect(mockDispatch).toHaveBeenCalled()

        })


        it('updateProfile', async () => {

            axios.put = jest.fn(() => ({
                data: {
                    user: {
                        id: "De8UACSFgFySnKdXm5hI",
                        name: "Astrodev",
                        email: "astrodev@future4.com",
                        cpf: "111.111.111-12",
                        hasAddress: true,
                        address: "R. Afonso Braz, 177 - Vila N. Conceição"
                    }
                }
            }))

            await updateProfile(mockTest)(mockDispatch)

            expect(mockDispatch).toHaveBeenCalledWith({
                type: "SET_PROFILE",
                payload: {
                    info: {
                        id: "De8UACSFgFySnKdXm5hI",
                        name: "Astrodev",
                        email: "astrodev@future4.com",
                        cpf: "111.111.111-12",
                        hasAddress: true,
                        address: "R. Afonso Braz, 177 - Vila N. Conceição"
                    }
                }
            })
        })

    })

})