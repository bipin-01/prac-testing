// // Define the User and Article types
// interface User {
//     firstName: string;
//     lastName: string;
//     email: string;
//     friends: User[];
//   }
  
//   interface Article {
//     title: string;
//     body: string;
//     author: User;
//     likes: User[];
//   }
  
//   // Define some mock data
//   const users: User[] = [
//     {
//       firstName: 'John',
//       lastName: 'Doe',
//       email: 'john.doe@example.com',
//       friends: []
//     },
//     {
//       firstName: 'Jane',
//       lastName: 'Doe',
//       email: 'jane.doe@example.com',
//       friends: []
//     }
//   ];
  
//   const articles: Article[] = [];
  
//   // Function to save a new user
//   function saveUser(firstName: string, lastName: string, email: string): User {
//     // Validate the email address
//     if (!isValidEmail(email)) {
//       throw new Error('Invalid email address.');
//     }
  
//     // Create the new user object
//     const user: User = {
//       firstName,
//       lastName,
//       email,
//       friends: []
//     };
  
//     // Add the new user to the list of users
//     users.push(user);
  
//     return user;
//   }
  
//   // Function to validate an email address
//   function isValidEmail(email: string): boolean {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   }
  
//   // Function to list all users
//   function listUsers(): User[] {
//     return users;
//   }
  
//   // Function to become friends with another user
//   function becomeFriends(user1: User, user2: User): void {
//     // Check if the users are already friends
//     if (user1.friends.includes(user2) || user2.friends.includes(user1)) {
//       return;
//     }
  
//     // Add each user to the other's list of friends
//     user1.friends.push(user2);
//     user2.friends.push(user1);
  
//     // Check if there are any mutual friends and suggest them
//     const mutualFriends = user1.friends.filter(friend => user2.friends.includes(friend));
//     if (mutualFriends.length > 0) {
//       console.log(`You might also like to be friends with: ${mutualFriends.map(friend => friend.firstName).join(', ')}`);
//     }
//   }
  
//   // Function to create a new article
//   function createArticle(title: string, body: string, author: User): Article {
//     const article: Article = {
//       title,
//       body,
//       author,
//       likes: []
//     };
  
//     // Add the new article to the list of articles
//     articles.push(article);
  
//     // Notify the author's friends about the new article
//     author.friends.forEach(friend => {
//       if (friend.email) {
//         sendEmailNotification(friend.email, `${author.firstName} just posted a new article: ${title}`);
//       }
//     });
  
//     return article;
//   }
  
//   // Function to like an article
//   function likeArticle(article: Article, user: User): void {
//     // Check if the user has already liked the article
//     if (article.likes.includes(user)) {
//       return;
//     }
  
//     // Add the user to the list of likes for the article
//     article.likes.push(user);
  
//     // Notify the author of the article about the new like
//     if (article.author.email) {
//       sendEmailNotification(article.author.email, `${user.firstName} liked your article: ${article.title}`);
//     }
//   }
  
//   // Function to send an email notification
//   function sendEmailNotification(email: string, message: string): void {
//     console.log(`Sending email to ${email}: ${message}`);
//   }
  