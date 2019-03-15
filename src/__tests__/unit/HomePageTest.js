import HomePage from '../../HomePage/HomePage';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('Login', () => {
    configure({ adapter: new Adapter() });
    let wrapper = shallow(<HomePage/>);

    it('renders without crashing', () => {
      shallow(<HomePage />);
    });

    it('matches snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    })

    it('upcoming meeting title heading is displayed', () => {
        const element = wrapper.find('.upcoming-meetings-title');
        expect(element.text()).to.equal('Upcoming Meetings (4)');
        console.log(element.text());
    });

    it('contains upcoming meeting table', () => {
        const element = wrapper.find('.upcoming-meetings-contents');
        expect(element.exists()).toBe(true);
        expect(element.length).to.equal(4)
        // expect(element).to.have.lengthOf(4);

        const firstRowColumns = element.first().find('th').map(column => column.text())
        expect(firstRowColumns.length).to.equal(1)
        expect(firstRowColumns[0]).to.equal('Name')
        expect(firstRowColumns[1]).to.equal('Date')
        expect(firstRowColumns[2]).to.equal('Time')
        expect(firstRowColumns[3]).to.equal('Location')

        const secondRowColumns = element.first().find('td').map(column => column.text())
        expect(secondRowColumns.length).to.equal(2)
        expect(secondRowColumns[0]).to.equal('Project')
        expect(secondRowColumns[1]).to.equal('07/01/2019')
        expect(secondRowColumns[2]).to.equal('16:00- 17:30')
        expect(secondRowColumns[3]).to.equal('BC5 D5 M3 Marie Curie')

        const thirdRowColumns = element.first().find('td').map(column => column.text())
        expect(thirdRowColumns.length).to.equal(3)
        expect(thirdRowColumns[0]).to.equal('Sprint Review')
        expect(thirdRowColumns[1]).to.equal('12/01/2019')
        expect(thirdRowColumns[2]).to.equal('10:00- 12:00')
        expect(thirdRowColumns[3]).to.equal('NBH 06 B M4 Kiev')

        const fourthRowColumns = element.first().find('td').map(column => column.text())
        expect(fourthRowColumns.length).to.equal(4)
        expect(fourthRowColumns[0]).to.equal('Retrospective')
        expect(fourthRowColumns[1]).to.equal('25/01/2019')
        expect(fourthRowColumns[2]).to.equal('15:00- 17:00')
        expect(fourthRowColumns[3]).to.equal('BC2 D4 M2 Animal Magic')

        const fifthRowColumns = element.first().find('td').map(column => column.text())
        expect(fifthRowColumns.length).to.equal(5)
        expect(fifthRowColumns[0]).to.equal('Project')
        expect(fifthRowColumns[1]).to.equal('28/01/2019')
        expect(fifthRowColumns[2]).to.equal('16:00- 17:30')
        expect(fifthRowColumns[3]).to.equal('BC5 D5 M3 Marie Curie')
    });

    it('watched meeting title heading is displayed', () => {
        const element = wrapper.find('.watched-meetings-title');
        expect(element.text()).to.equal('Watched Meetings (5)');
    });

    it('contains watched meeting table', () => {
        const element = wrapper.find('.watched-meetings-contents');
        expect(element.exists()).toBe(true);
        expect(element.length).to.equal(4)
        // expect(element).to.have.lengthOf(4);

        const firstRowColumns = element.first().find('th').map(column => column.text())
        expect(firstRowColumns.length).to.equal(1)
        expect(firstRowColumns[0]).to.equal('Name')
        expect(firstRowColumns[1]).to.equal('Location')
        expect(firstRowColumns[2]).to.equal('Next Available')

        const secondRowColumns = element.first().find('td').map(column => column.text())
        expect(secondRowColumns.length).to.equal(2)
        expect(firstRowColumns[0]).to.equal('Project')
        expect(firstRowColumns[1]).to.equal('NBH 06 E M2 Studio 1')
        expect(firstRowColumns[2]).to.equal('19/02/2019 at 13:00')

        const thirdRowColumns = element.first().find('td').map(column => column.text())
        expect(thirdRowColumns.length).to.equal(3)
        expect(firstRowColumns[0]).to.equal('Sprint Review')
        expect(firstRowColumns[1]).to.equal('NBH 04 Collaboration Zone')
        expect(firstRowColumns[2]).to.equal('26/03/2019 at 09:00')

        const fourthRowColumns = element.first().find('td').map(column => column.text())
        expect(fourthRowColumns.length).to.equal(4)
        expect(firstRowColumns[0]).to.equal('Retrospective')
        expect(firstRowColumns[1]).to.equal('BC4 D5 M2 Picsso')
        expect(firstRowColumns[2]).to.equal('09/04/2019 at 18:00')

        const fifthRowColumns = element.first().find('td').map(column => column.text())
        expect(fifthRowColumns.length).to.equal(5)
        expect(firstRowColumns[0]).to.equal('Project')
        expect(firstRowColumns[1]).to.equal('NBH 06 E M2 Studio 1')
        expect(firstRowColumns[2]).to.equal('15/04/2019 at 17:00')

        const sixthRowColumns = element.first().find('td').map(column => column.text())
        expect(sixthRowColumns.length).to.equal(5)
        expect(sixthRowColumns[0]).to.equal('Sprint Review')
        expect(sixthRowColumns[1]).to.equal('NBH 04 Collaboration Zone')
        expect(sixthRowColumns[2]).to.equal('07/05/2019 at 12:00')
    });

  });
