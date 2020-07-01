import React from 'react'
import { shallow } from 'enzyme'
import { Loading } from './index'
import { PageWrapper } from './styles'

describe('Component Loading', () => {

    let component
    let loading
    beforeEach( () => {
        component = shallow(<Loading />)
        loading = component.find(PageWrapper)
    })

    it('the component Loading exists', () => {
        expect(loading).toHaveLength(1)
    })

})