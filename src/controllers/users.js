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
