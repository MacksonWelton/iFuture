import user from './user'
import { setFullAddress, setProfile } from '../actions/user'

describe('User Reducer', () => {

    const mockInitialState = {}
    const mockTest = [{}]

    it('setProfile', () => {
        const mockedAction = setProfile(mockTest)
        const newStore = user(mockInitialState, mockedAction)
        expect(newStore.user).toHaveLength(1)
    })

    it('setFullAddress', () => {
        const mockedAction = setFullAddress(mockTest)
        const newStore = user(mockInitialState, mockedAction)
        expect(newStore.userAddress).toHaveLength(1)
    })

})