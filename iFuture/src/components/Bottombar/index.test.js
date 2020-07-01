import React from 'react'
import { shallow } from 'enzyme'
import { Bottombar } from './index'
import { DivWrapper } from './styles'

describe('Component Bottombar', () => {

    let component
    let bottomBar
    beforeEach( () => {
        component = shallow(<Bottombar/>)
        bottomBar = component.find(DivWrapper)
    })

    it('the component Bottombar exists', () => {
        expect(bottomBar).toHaveLength(1)
    })

})