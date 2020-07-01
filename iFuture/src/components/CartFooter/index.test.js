import React from 'react'
import { shallow } from 'enzyme'
import { CartFooter } from './index'
import { CartFooterWrapper } from './styles'

describe('Component CardRestaurant', () => {

    let component
    let cartFooter
    let mockedFilteredList
    let mockedRestaurant
    let mockInfoQuantity
    beforeEach( () => {
        mockedFilteredList = []
        mockedRestaurant = {
            shipping: 1, 
            products: []
        }
        mockInfoQuantity = [
            // {
            //     quantity: 1
            // }
        ]
        component = shallow(<CartFooter 
            filteredList={mockedFilteredList} 
            restaurant={mockedRestaurant}
            infoQuantity={mockInfoQuantity}
        />)
        cartFooter = component.find(CartFooterWrapper)
    })

    it('the component CartFooter exists', () => {
        expect(cartFooter).toHaveLength(1)
    })

})