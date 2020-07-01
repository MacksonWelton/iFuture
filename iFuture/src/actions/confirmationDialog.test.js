import { setDialog, setItemId } from './confirmationDialog'

describe('Confirmation Dialog actions', () => {

    describe('Actions creators', () => {
        const mockTest = "test"

        it('setDialog', () => {
            const mockedAction = setDialog(mockTest)

            expect(mockedAction.type).toEqual("SET_DIALOG")
            expect(mockedAction.payload.option).toBeDefined()
            expect(mockedAction.payload.option).toEqual(mockTest)
        })

        it('setItemId', () => {
            const mockedAction = setItemId(mockTest)

            expect(mockedAction.type).toEqual("SET_ITEM_ID")
            expect(mockedAction.payload.itemId).toBeDefined()
            expect(mockedAction.payload.itemId).toEqual(mockTest)
        })
    })

})