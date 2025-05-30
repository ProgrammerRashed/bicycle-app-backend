import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  frontend_url: process.env.FRONTEND_URL,
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT,
  jwt_access_expires_in: process.env.JWT_EXPIRETIME,
  jwt_access_secret: process.env.JWT_SECRET_KEY,
  stripe_scret_key: process.env.STRIPE_SECRET_KEY,
};
