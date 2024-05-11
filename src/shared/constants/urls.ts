import dotenv from 'dotenv';

// we will use dotenv since we can't use configService in this file
dotenv.config();

export const { FRONTEND_URL } = process.env;

export const FRONTEND_VERIFY_ACCOUNT_URL = `${FRONTEND_URL}/auth/verify`;
export const FRONTEND_RESET_PASSWORD_URL = `${FRONTEND_URL}/auth/reset-password`;
