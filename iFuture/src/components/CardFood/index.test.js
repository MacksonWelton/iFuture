import React from 'react'
import { shallow } from 'enzyme'
import { CardFood } from './index'
import { CardWrapper } from './styles'

describe('Component CardFood', () => {

    let component
    let cardFood
    let mockInfoQuantity
    let mockItem
    beforeEach( () => {
        mockInfoQuantity = []
        mockItem = {
            price: 0
        }
        component = shallow(<CardFood infoQuantity={mockInfoQuantity} item={mockItem}/>)
        cardFood = component.find(CardWrapper)
    })

    it('the component CardFood exists', () => {
        expect(cardFood).toHaveLength(1)
    })

})