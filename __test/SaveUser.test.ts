import sinon from 'sinon';
import { createUser, saveUser } from '../src/SaveUser';

type User = {
  firstName: string;
  lastName: string;
  email: string;
}

describe('User functions', () => {
  describe('createUser', () => {
    it('returns a new user object with the correct properties', () => {
      const user = createUser('John', 'Doe', 'john.doe@example.com');
      expect(user).toEqual({ firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' });
    });
  });

  describe('saveUser', () => {
    it('logs a message to the console with the correct user data', () => {
      const user: User = { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' };
      const consoleSpy = sinon.spy(console, 'log');

      console.log(consoleSpy)
      
      saveUser(user);
      
      expect(consoleSpy.calledWith(`User John Doe john.doe@example.com saved`)).toBe(true);
      expect(consoleSpy.called).toBe(true)
      consoleSpy.restore();
    });
  });
});
