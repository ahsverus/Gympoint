// import Student from "../models/Student";

class StudentController {
  async store(req, res) {
    res.json({ message: "ok" });
  }
}

export default new StudentController();
