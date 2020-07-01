import React from 'react'
import { shallow } from 'enzyme'
import { Appbar } from './index'
import { AppbarStyled } from './styles'

describe('Component Appbar', () => {

    let component
    let appBar
    beforeEach( () => {
        component = shallow(<Appbar/>)
        appBar = component.find(AppbarStyled)
    })

    it('the component Appbar exists', () => {
        expect(appBar).toHaveLength(1)
    })

})