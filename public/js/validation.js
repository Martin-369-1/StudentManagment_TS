function checkValidText(
  text,
  type,
  minChar,
  maxChar,
  containSpace,
  containNumbers,
  containSymbols
) {
  if (text !== text.trim() || !text) {
    return `${type} should not be empty`;
  }

  if (minChar && maxChar && (text.length < minChar || text.length > maxChar)) {
    return `${type} should be between ${minChar} and ${maxChar} characters`;
  }

  if (!containSpace && /\s/.test(text)) {
    return `${type} should not contain spaces`;
  }

  if (!containNumbers && /\d/.test(text)) {
    return `${type} should not contain any numbers`;
  }

  if (!containSymbols && /[^a-zA-Z0-9\s]/.test(text)) {
    return `${type} should not contain any symbols`;
  }
}

function checkValidNumber(number, type, min, max, minLength, maxLength) {
  if (!number) {
    return `${type} should not be empty`;
  }

  if (!/^\d+$/.test(number)) {
    return `${type} should be a valid number`;
  }

  const numValue = parseInt(number, 10);

  if (min && numValue < min) {
    return `${type} should be greater than or equal to ${min}`;
  }

  if (max && numValue > max) {
    return `${type} should be lesser than or equal to ${max}`;
  }
}

function checkValidPassword(password, confirmPassword) {
  if (!password || !confirmPassword) {
    return `Password and confirm password should not be empty`;
  }

  if (password !== confirmPassword) {
    return `Password and confirm password do not match`;
  }

  if (password !== password.trim()) {
    return `Password should not contain leading or trailing spaces`;
  }

  if (password.length < 8 || password.length > 20) {
    return `Password should be between 8 and 20 characters`;
  }

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,20}$/;

  if (!passwordRegex.test(password)) {
    return `Password should contain at least one letter, one number, one special character, and be between 8 to 20 characters long.`;
  }
}

function checkValidEmail(email) {
  if (!email) {
    return `email should not be empty`;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return `Email is not valid`;
  }
}
