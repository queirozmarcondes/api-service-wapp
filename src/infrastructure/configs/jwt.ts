import dotenv from "dotenv";

dotenv.config();

if (!process.env.JWT_SECRET || !process.env.JWT_REFRESH_SECRET) {
    console.log("aqui " + process.env.JWT_SECRET, process.env.JWT_REFRESH_SECRET);
    throw new Error(
        "As variáveis de ambiente JWT_SECRET e JWT_REFRESH_SECRET devem ser definidas.",
    );
}

export const authConfig = {
    jwtSecret: process.env.JWT_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
};