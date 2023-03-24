import sinon from 'sinon';
import { createUser, validateEmail, becomeFriends } from '../src/testRequirement';

describe('User Functions', () => {
  describe('createUser', () => {
    it('should create a user with a unique ID and return the user', () => {
      const user = createUser('John', 'Doe', 'john.doe@example.com');
      expect(user.id).toBeDefined();
      expect(user.firstName).toBe('John');
      expect(user.lastName).toBe('Doe');
      expect(user.email).toBe('john.doe@example.com');
      expect(user.friends).toEqual([]);
    });
  });

  describe('validateEmail', () => {
    it('should return true for a valid email address', () => {
      const result = validateEmail('john.doe@example.com');
      expect(result).toBe(true);
    });

    it('should return false for an invalid email address', () => {
      const result = validateEmail('john.doe');
      expect(result).toBe(false);
    });
  });

  describe('becomeFriends', () => {
    it('should add each user to the other user\'s friends list', () => {
      const user1 = createUser('John', 'Doe', 'john.doe@example.com');
      const user2 = createUser('Jane', 'Doe', 'jane.doe@example.com');
      becomeFriends(user1, user2);
      expect(user1.friends).toContain(user2);
      expect(user2.friends).toContain(user1);
    });
  });
});
