import React from 'react'
import { shallow } from 'enzyme'
import { CardRestaurant } from './index'
import { CardRestaurantWrapper } from './styles'

describe('Component CardRestaurant', () => {

    let component
    let cardRestaurant
    let mockedRestaurant
    beforeEach( () => {
        mockedRestaurant = {
            logoUrl: '',
            products: []
        }
        component = shallow(<CardRestaurant restaurant={mockedRestaurant}/>)
        cardRestaurant = component.find(CardRestaurantWrapper)
    })

    it('the component CardRestaurant exists', () => {
        expect(cardRestaurant).toHaveLength(1)
    })

})