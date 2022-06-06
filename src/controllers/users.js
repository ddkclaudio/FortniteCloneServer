//=============================================================
// IMPORTS
//=============================================================
const User = require("../models/users");

//=============================================================
// EXPORTS CRUD
//=============================================================
exports.signUp = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    delete user.password;
    return res.json({ user });
  } catch (error) {
    error = new Error(error);
    error.status = error.statusCode;
    error.code = error.code;
    next(error);
  }
};

exports.signIn = async (req, res, next) => {
  try {
    const user = await User.get(req.body.email);
    // https://www.npmjs.com/package/bcrypt
    if (user && user.password === req.body.password) {
      // delete user.password;
      return res.json({ user });
    } else {
      error = new Error("Usuario nao encontrado, e-mail ou senha nao conferem");
      error.status = 200;
      next(error);
    }
  } catch (error) {
    error = new Error(error);
    error.status = error.statusCode;
    next(error);
  }
};
