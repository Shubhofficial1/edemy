import User from "../models/userModel.js";
import { hashPassword, comparePassword } from "../utils/auth.js";

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) {
      return res.status(400).send("Name is required");
    }
    if (!password || password.length < 6) {
      return res
        .status(400)
        .send("Password is required & should be at least 6 characters long.");
    }

    let userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).send("Email is Taken");
    }

    // Hash Password
    const hashedPassword = await hashPassword(password);

    //Register
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
    });

    await user.save();
    console.log("Saved User", user);
    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error , Try Again!");
  }
};

export { register };
