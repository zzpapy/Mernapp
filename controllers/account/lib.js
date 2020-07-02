const User = require("../../schema/schemaUser.js");
const fileUpload = require('express-fileupload');
const passwordHash = require("password-hash");

async function signup(req, res) {
  const { password, email, nom } = req.body;
  if (!email || !password) {
    //Le cas où l'email ou bien le password ne serait pas soumit ou nul
    return res.status(400).json({
      text: "Requête invalide"
    });
  }
  // Création d'un objet user, dans lequel on hash le mot de passe
  const user = {
    email,
    nom,
    password: passwordHash.generate(password)
  };
  // On check en base si l'utilisateur existe déjà
  try {
    const findUser = await User.findOne({
      email
    });
    if (findUser) {
      return res.status(400).json({
        text: "L'utilisateur existe déjà",        
        user : findUser.affich()
      });
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
  try {
    // Sauvegarde de l'utilisateur en base
    const userData = new User(user);
    const userObject = await userData.save();
    return res.status(200).json({
      text: "Succès",
      token: userObject.getToken()
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error });
  }
}

async function upload(req, res) { 
  const { photo} = req.files;
//  console.log(req)
  // try {    
  //   const findUser = await User.find({});
  //     return res.status(200).json({
  //       text: "Succès",
  //       token: userObject.getToken(),
  //       users : findUser
  //     });
  //   } catch (error) {
  //     return res.status(500).json({ error });
  //   }
  return res.status(200).json({
    text: "Succès"
  });
}

async function login(req, res) {
  const { password, email } = req.body;
  if (!email || !password) {
    //Le cas où l'email ou bien le password ne serait pas soumit ou nul
    return res.status(400).json({
      text: "Requête invalide",
    });
  }
  try {
    // On check si l'utilisateur existe en base
    const findUser = await User.findOne({ email });
    if (!findUser)
    return res.status(401).json({
      text: "L'utilisateur n'existe pas"
    });
    if (!findUser.authenticate(password))
    return res.status(401).json({
      text: "Mot de passe incorrect"
    });
    return res.status(200).json({
      token: findUser.getToken(),
      text: "Authentification réussi",
      user : findUser.affich()
    });
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        error
      });
    }
  }

  //On exporte nos deux fonctions

exports.login = login;
exports.signup = signup;
// exports.signup = findAll;