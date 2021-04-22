import User from "../models/user.model";

export const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json({ ok: true, users });
};

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User(req.body);
  await user.save();
  res.json({
    ok: true,
    user,
  });
};
