export function isValidEmail(email: string) : boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      throw new Error('Invalid email address.');
    }
    return emailRegex.test(email)
}


