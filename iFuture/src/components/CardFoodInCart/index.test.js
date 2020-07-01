import React from 'react'
import { shallow } from 'enzyme'
import { CardFoodInCart } from './index'
import { CardWrapper } from './styles'

describe('Component CardFood', () => {

    let component
    let cardFoodInCart
    let mockInfoQuantity
    let mockItem
    beforeEach( () => {
        mockInfoQuantity = [
            {
                quantity: 1
            }
        ]
        mockItem = {
            price: 0
        }
        component = shallow(<CardFoodInCart infoQuantity={mockInfoQuantity} item={mockItem}/>)
        cardFoodInCart = component.find(CardWrapper)
    })

    it('the component CardFoodInCart exists', () => {
        expect(cardFoodInCart).toHaveLength(1)
    })

})