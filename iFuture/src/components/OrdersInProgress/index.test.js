import React from 'react'
import { shallow } from 'enzyme'
import { OrdersInProgress } from './index'
import { CardStyled } from './styled'

describe('Component OrdersInProgress', () => {

    let component
    let ordersInProgress
    beforeEach( () => {
        component = shallow(<OrdersInProgress />)
        ordersInProgress = component.find(CardStyled)
    })

    it('the component OrdersInProgress exists', () => {
        // expect(ordersInProgress).toHaveLength(1)
    })

})