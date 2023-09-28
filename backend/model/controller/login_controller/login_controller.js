const db = require("../../entities");
const user_table = db.signuptable;
const jwt = require('jsonwebtoken')
const env= require('dotenv');
env.config()


const Login_controller = async (req, res) => {
  const { email, password } = req.body;
  console.log("Email", email)
  if (password && email) {
    console.log("if")
    try {
      console.log("try")
      // Check if a user with the same email already exists in the database
      const existingUser = await user_table.findOne({
        where:
        {
          email: email,
        }
      });
      // console.log("existing user",existingUser)
      if (existingUser) {
        // console.log("response",existingUser)
        const token = jwt.sign({ email: existingUser.email }, process.env.SECRET_KEY, { expiresIn: "1d", });
        // console.log("logged in user details",existingUser);

        console.log(token)
        res.status(200).send({ message: "success", existingUser,token })

      } else {

        res.status(200).send({ message: "User does not Existed; Please Sign Up." })
      }

    } catch (error) {

      console.error(error.message);
      res.status(500).send({ message: "Invalid email or password!" });
    }

  } else {
    res.status(200).send({ message: "All fields are mandatory ; Please fill it." });
  }
};


module.exports = {
  Login_controller,
};