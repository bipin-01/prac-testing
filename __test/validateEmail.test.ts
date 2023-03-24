import * as Email from '../src/validateEmail';
import { saveUser, createUser } from '../src/SaveUser';
import sinon from 'sinon';

type User = {
    firstName: string;
    lastName: string;
    email: string;
  }

describe("Validate Email", () => {
    it('Should validate the given user using spy', () => {

        const user: User = { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com'};
        const emailSpy = sinon.spy(Email, 'isValidEmail')

        createUser('John', 'Doe','john.doe@example.com');

        console.log(emailSpy.calledWith)
        expect(emailSpy.calledWith('john.doe@example.com')).toBe(true)
        expect(emailSpy.called).toBe(true)
        console.log(emailSpy.returnValues)
        emailSpy.restore();
    })


    it('Should validate the given user using stub', () => {
        const emailStub = sinon.stub(Email, 'isValidEmail');

        createUser('John', 'Doe','john.doe@example.com');
        expect(emailStub.calledWith('john.doe@example.com')).toBe(true)
        expect(emailStub.returns(true))
    })
})


