import confirmationDialog from './confirmationDialog'
import { setDialog, setItemId } from '../actions/confirmationDialog'

describe('', () => {

    const mockInitialState = {}
    const mockTest = [{}]

    it('setDialog', () => {
        const mockedAction = setDialog(mockTest)
        const newStore = confirmationDialog(mockInitialState, mockedAction)
        expect(newStore.dialogOpen).toHaveLength(1)
    })

    it('setItemId', () => {
        const mockedAction = setItemId(mockTest)
        const newStore = confirmationDialog(mockInitialState, mockedAction)
        expect(newStore.itemId).toHaveLength(1)
    })

})