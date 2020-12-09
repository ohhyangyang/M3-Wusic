const bcrypt = require("bcrypt");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const encryptedPassword = bcrypt.hashSync("albert123", salt);
console.log(encryptedPassword);