import { setInputSearch } from './search'

describe('Search actions', () => {

    describe('Actions creators', () => {
        const mockTest = "test"

        it('setInputSearch', () => {
            const mockedAction = setInputSearch(mockTest)

            expect(mockedAction.type).toEqual("SET_INPUT_SEARCH")
            expect(mockedAction.payload.inputContent).toBeDefined()
            expect(mockedAction.payload.inputContent).toEqual(mockTest)
        })
    })

})