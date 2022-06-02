//=============================================================
// IMPORTS
//=============================================================
const User = require("../models/users");

//=============================================================
// EXPORTS CRUD
//=============================================================
exports.signUp = (req, res) => {
    //   const user = await User.create(req.body);
    //   return res.json({ user });
    res.send("signUp");
    return
  };

  
  exports.rota2 = (req, res) => {
    //   const user = await User.create(req.body);
    //   return res.json({ user });
    res.send(User.signUp());
    return
  };
  