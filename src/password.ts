import * as bcrypt from "bcryptjs";

const bcryptPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  return hash;
};

const password = {
  bcryptPassword,
};

export default password;
