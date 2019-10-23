import jwt from "jsonwebtoken";
import User from "../models/User";
// import Student from "../models/Student";
import authConfig from "../../config/auth";

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    console.log("chegou aqui");

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: "user not found" });
    }
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: "password dont match" });
    }

    const { id, name } = user;
    return res.json({
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: "7d",
      }),
    });
  }
}

export default new SessionController();
