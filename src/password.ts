import * as bcrypt from 'bcrypt';

const bcryptPassword = async function (password){
    const saltGenerate = 10;
    const hash = await bcrypt.hash(password, saltGenerate);
    return hash;
}

const password = {
    bcryptPassword
}

export default password;