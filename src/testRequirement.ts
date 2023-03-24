interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    friends: User[];
  }
  
  interface Article {
    id: number;
    title: string;
    body: string;
    author: User;
    likes: number;
  }
  
  interface myNotification {
    id: number;
    message: string;
    user: User;
  }
  
  let users: User[] = [];
  let articles: Article[] = [];
  let notifications: myNotification[] = [];
  let lastUserId = 0;
  let lastArticleId = 0;
  let lastNotificationId = 0;
  
 export function createUser(firstName: string, lastName: string, email: string): User {
    const id = ++lastUserId;
    const user: User = { id, firstName, lastName, email, friends: [] };
    users.push(user);
    return user;
  }
  
 export function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  export function listUsers(): User[] {
    return users;
  }
  
  export function becomeFriends(user1: User, user2: User): void {
    user1.friends.push(user2);
    user2.friends.push(user1);
    const mutualFriends = findMutualFriends(user1, user2);
    if (mutualFriends.length > 0) {
      const suggestion = `You may also know: ${mutualFriends.map(f => f.firstName).join(', ')}`;
      sendNotification(user1, suggestion);
      sendNotification(user2, suggestion);
    }
  }
  
 export  function findMutualFriends(user1: User, user2: User): User[] {
    return user1.friends.filter(friend1 => user2.friends.some(friend2 => friend1 === friend2));
  }
  
  export function createArticle(title: string, body: string, author: User): Article {
    const id = ++lastArticleId;
    const article: Article = { id, title, body, author, likes: 0 };
    articles.push(article);
    notifyFriends(author, `New article by ${author.firstName}: ${title}`);
    return article;
  }
  
  export function likeArticle(article: Article, user: User): void {
    article.likes++;
    notifyUser(article.author, `${user.firstName} liked your article: ${article.title}`);
  }
  
  export function notifyUser(user: User, message: string): void {
    const id = ++lastNotificationId;
    const notification: myNotification = { id, message, user };
    notifications.push(notification);
    sendEmail(user.email, message);
  }
  
  export function notifyFriends(user: User, message: string): void {
    user.friends.forEach(friend => notifyUser(friend, message));
  }
  
  export function sendNotification(user: User, message: string): void {
    // Code to send push notification to user

    console.log("Sending Notification")
  }
  
 export function sendEmail(email: string, message: string): void {
    // Code to send email to user

    console.log("Sending Email")
  }
  