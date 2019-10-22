import Sequelize, { Model } from "sequelize";

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        idade: Sequelize.INTEGER,
        peso: Sequelize.INTEGER,
        altura: Sequelize.INTEGER,
        email: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Student;
