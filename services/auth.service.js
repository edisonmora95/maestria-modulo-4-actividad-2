const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

/**
 * @param {string} password
 */
const hashPassword = (password) => {
  const hash = bcrypt.hashSync(password, SALT_ROUNDS);
  return hash;
};

module.exports = {
  hashPassword,
};
