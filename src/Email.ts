export function send(user: { name: string, nameLowerCase: string }) {
    console.log("Sending.....")
  
    return user.nameLowerCase.toUpperCase()
  }
  