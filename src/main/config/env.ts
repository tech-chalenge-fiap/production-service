export const envConfig = {
  PORT: process.env.PORT ?? 3000,
  TZ: 'America/Sao_Paulo',
  AUTH_USER: process.env.AUTH_USER ?? '',
  AUTH_PWD: process.env.AUTH_PWD ?? '',
  BODY_PARSER_JSON_LIMIT: '50mb',
  IS_ACTIVE_DB_DEBUG: process.env.IS_ACTIVE_DB_DEBUG === 'true'
}
