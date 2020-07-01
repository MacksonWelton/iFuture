import React from 'react'
import { shallow } from 'enzyme'
import { CartMain } from './index'
import { EmptyCartWrapper } from './styles'

describe('Component CardRestaurant', () => {

    let component
    let cartMain
    let mockedFilteredList
    let mockedRestaurant
    beforeEach( () => {
        mockedFilteredList = []
        mockedRestaurant = {
            // shipping: 1, 
            // products: []
        }
        component = shallow(<CartMain 
            filteredList={mockedFilteredList} 
            restaurant={mockedRestaurant}
        />)
        cartMain = component.find(EmptyCartWrapper)
    })

    it('the component CartMain exists', () => {
        expect(cartMain).toHaveLength(1)
    })

})