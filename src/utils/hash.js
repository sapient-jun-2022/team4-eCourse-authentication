import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

//hash the password
export const hash = async (password) => {
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

//compare the password and hashedPassword
export const compare = async (password, hashedPassword) => {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
}