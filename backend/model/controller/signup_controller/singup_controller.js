const db = require("../../entities");
const Signup = db.signuptable;


const create_user_admin = async (req, res) => {
  const { name, email, password, confirmPassword, contactNumber } = req.body;
  if (name && password && email && confirmPassword && contactNumber) {
    try {
      // Check if a user with the same email already exists in the database
      const existingUser = await Signup.findOne({ where: { email: email } });
      // console.log(existingUser,"Backend signup")
      if (existingUser) {
        // console.log("if");
        res.status(200).json({ message: "User already exists!" });
      }

      else {
        console.log("else")
        console.log("data can in else part")
        // Create a new user in the database
        const newUser = await Signup.create({
          Name: name,
          email: email,
          password: password,
          contact_number: contactNumber,
        });

        console.log(newUser);
        res.status(200).json({ message: "User added" });
      }

    } catch (error) {
      console.error(error.message, "Error");
      res.status(500).json({ message: "Internal server error" });
    }

  } else {
    res.status(200).json({ message: "All fields are mandatory ; Please fill it." });
  }
};

module.exports = {
  create_user_admin,
};