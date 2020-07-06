import React from 'react';
import {mount} from 'enzyme';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
    test('Render dof the Footer Component,  test created by Jonathan Sifuentes.',() => {
        const footer = mount(<Footer/>);
        expect(footer.length).toEqual(1);
    } )
});
