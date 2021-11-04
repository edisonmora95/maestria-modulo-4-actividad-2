const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

/**
 * @param {string} password
 */
const hashPassword = (password) => {
  const hash = bcrypt.hashSync(password, SALT_ROUNDS);
  return hash;
};

/**
 * @param {string} plainText
 * @param {string} hashed
 */
const comparePasswords = (plainText, hashed) => {
  return bcrypt.compareSync(plainText, hashed);
};

module.exports = {
  hashPassword,
  comparePasswords,
};
