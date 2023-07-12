import fs from "fs";
const api = process.env.API_URL || "http://localhost:8000";
const config = `const env=process.env.NODE_ENV||"development";export default {development:{api:"${api}"},test:{api:"${api}"},production:{api:"${api}"}}[env];`;
fs.writeFileSync("./config/index.ts", config);
fs.writeFileSync("./config/index.mjss", config);
