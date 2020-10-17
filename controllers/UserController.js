const model = require('../orm/models')
const User = model.User

function UserController() {
  this.getUser = async (req, res) => {
    const users = await User.findAll({
      order: [['id', 'DESC']]
    });
    res.status(200).json({ code: 200, status: 'successed', data: users }).end();
  }
}

module.exports = new UserController()