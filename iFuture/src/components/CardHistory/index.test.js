import React from 'react'
import { shallow } from 'enzyme'
import { CardHistory } from './index'
import { Order } from './styles'

describe('Component CardHistory', () => {

    let component
    let cardHistory
    let mockedOrder
    beforeEach( () => {
        mockedOrder = {
            totalPrice: []
        }
        component = shallow(<CardHistory order={mockedOrder}/>)
        cardHistory = component.find(Order)
    })

    it('the component CardHistory exists', () => {
        expect(cardHistory).toHaveLength(1)
    })

})