import React from 'react'
import { shallow } from 'enzyme'
import { ConfirmationDialog } from './index'

describe('Component CardRestaurant', () => {

    let component
    let confirmationDialog
    beforeEach( () => {
        component = shallow(<ConfirmationDialog />)
        confirmationDialog = component.find('#dialog')
    })

    it('the component ConfirmationDialog exists', () => {
        expect(confirmationDialog).toHaveLength(1)
    })

})