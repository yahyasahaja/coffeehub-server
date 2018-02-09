export const LOG_MODE = 'dev'
export const DATABASE = {
  DATABASE_NAME: 'coffeehub',
  USER: 'yahya',
  PASSWORD: 'yahya',
  HOST: 'localhost',
  DIALECT: 'mysql',
  PORT: 3306,
  POOL_SIZE: 10,
}
export const JWT = {
  secretKey: '$2a$10$337BOwyRy9s4ecI7Rd5/.e',
  refreshTokenExpire: 86400,
  accessTokenExpire: 100000,
  roles: ['user', 'store'],
}

export default {
  LOG_MODE,
  DATABASE,
  JWT
}