const userCtrl = {}

const UserModel = require('../models/User')

userCtrl.getUsers = async (req, res) => {
  const users = await UserModel.find()
  res.json(users)
}

userCtrl.createUser = async (req, res) => {
  try {
    const { userName } = req.body

    if (!userName) {
      return res.status(400).json({ error: 'required "username" field is missing' })
    }

    const newUser = new UserModel({ userName: userName })
    const user = await newUser.save()
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json(error)
  }
}

userCtrl.getUser = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.id)
    if (user) res.json(user)
    else res.status(404).end()
  } catch (error) {
    next(error)
  }
}

userCtrl.deleteUser = async (req, res, next) => {
  try {
    const data = await UserModel.findByIdAndDelete(req.params.id)
    if (data === null) return res.sendStatus(404)
    res.status(204).end()
  } catch (error) {
    next(error)
  }
}

userCtrl.updateUser = async (req, res) => {
  const { userName } = req.body
  const newUser = await UserModel.findOneAndUpdate({ _id: req.params.id }, { userName: userName })
  res.json(newUser)
}

module.exports = userCtrl
