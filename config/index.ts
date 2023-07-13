const env = process.env.NODE_ENV || "development";
const api = process.env.API_URL || "http://localhost:8000";
export default {
  development: { api },
  test: { api },
  production: { api },
}[env];
