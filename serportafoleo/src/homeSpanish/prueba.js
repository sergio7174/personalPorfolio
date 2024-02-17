
function validateEmail(email) {
    // Regular expression pattern to validate email address
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Check if the email matches the pattern
    if (emailPattern.test(email)) {
      // Check if the email is a Gmail address
      if (email.endsWith("@gmail.com")) {
        return true; // Valid Gmail address
      } else {
        return false; // Not a Gmail address
      }
    } else {
      return false; // Invalid email format
    }
  }



const email1 = "example@gmail.com";
const email2 = "test@example.com";
const email3 = "invalidemail";

console.log(validateEmail(email1)); // Output: true
console.log(validateEmail(email2)); // Output: false
console.log(validateEmail(email3)); // Output: false