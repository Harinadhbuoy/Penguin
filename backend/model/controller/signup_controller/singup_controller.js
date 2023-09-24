const db = require("../../entities");
const Signup = db.signuptable;


const create_user_admin = async (req, res) => {
  const { name,email, password, confirmPassword, contactNumber } = req.body;
  if (name && password && email && confirmPassword && contactNumber) {
    const email_pattern=/^[a-z0-9]+@gamail\.com$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9@#$%^&*!]{8,}$/
    try {
      // Check if a user with the same email already exists in the database
      const existingUser = await Signup.findOne({ where: { email: email } });
        // console.log(existingUser,"Backend signup")
      if (existingUser) {
        // console.log("if");
        res.status(200).json({ message: "User already exists!" });
      }

     // const email_pattern=/^[\w.-]+@jmangroup\.com$/
    //   else if(!email_pattern.test(email)){
    //     console.log("else if 1")
    //     res.status(200).json({ message: "In email domain name should contain g and only small letters"})
    //   }

 
    //   else if(!password_pattern.test(password)){
    //     console.log("else if 2")
    //     res.status(200).json({ message: "Password must have a capital letter a small letter and a number and include any special character"});  
    //   }

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
      console.error(error.message,"Error");
      res.status(500).json({ message: "Internal server error" });
    }

  } else {
    res.status(200).json({ message: "All fields are mandatory ; Please fill it."});
  }
};

module.exports = {
  create_user_admin,
};