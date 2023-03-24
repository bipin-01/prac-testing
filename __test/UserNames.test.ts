import * as User from  '../src/userNames';
import * as Hello from '../src/hello'

import sinon from 'sinon';

describe('Check userName', () => {

    it('Should check the return array of UserNames', () => {

        const userSpy = sinon.spy(User, 'addNewUser');

        User.addNewUser('user5');
    
        const data = [['user1', 'user2', 'user3', 'user4', 'user5']]
    
        console.log(userSpy.returnValues)
        expect(userSpy.returnValues[0])
        expect(userSpy.returned(data[0]))
    })
})

describe('Comparing return of spy and stud', () => {
    it('Should check the return method of spy', () => {
        const helloStub = sinon.stub(Hello, 'returnHello');

        Hello.returnHello('bipin');

        expect(helloStub.returns('Hi, bipin'))


        // console.log(helloSpy.returned('Hi, bipin').valueOf())
        // expect(helloSpy.return('Hi, bipin').valueOf())
    })

    // it('Should Check the return method of stud', () => {

    //     const helloStub = Sinon.stub(Hello, 'returnHello');

    //     Hello.returnHello('bipin');

    //     expect(helloStub.returned('fdafdasfdsaf').valueOf)
    // })
})
