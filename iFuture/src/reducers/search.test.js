import search from './search'
import { setInputSearch } from '../actions/search'

describe('User Reducer', () => {
    const mockInitialState = {}
    const mockTest = ['']

    it('setInputSearch', () => {
        const mockedAction = setInputSearch(mockTest)
        const newStore = search(mockInitialState, mockedAction)
        expect(newStore.inputSearch).toHaveLength(1)
    })

})