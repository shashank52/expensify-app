import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDahboardPage from '../../components/ExpenseDashboardPage';

test('should render ExpenseDashboardPage correctly',() =>{
    const wrapper = shallow(<ExpenseDahboardPage />)
    expect(wrapper).toMatchSnapshot()
})