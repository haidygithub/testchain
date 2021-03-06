const dotenv = require("dotenv");

const env = dotenv.config().parsed;

console.log(env.REACT_APP_MANCHESTER_HOSPITAL_ACCESSTOK);
console.log(env.REACT_APP_LONDON_HOSPITAL_ACCESSTOK);
console.log(env.REACT_APP_BOLTON_RESEARCH_INSTITUTE_ACCESSTOK);

console.log(env.REACT_APP_CRED_DEF_ID_MANCHESTER_HOSPITAL_DOCTOR_ID);
console.log(env.REACT_APP_CRED_DEF_ID_MANCHESTER_HOSPITAL_ADMIN_ID);

console.log(env.REACT_APP_CRED_DEF_ID_LONDON_HOSPITAL_DOCTOR_ID);
console.log(env.REACT_APP_CRED_DEF_ID_LONDON_HOSPITAL_ADMIN_ID);

console.log(env.REACT_APP_CRED_DEF_ID_BOLTON_RESEARCH_INSTITUTE_ENTITY_ID);

console.log(env.REACT_APP_MANCHESTER_HOSPITAL_DOCTOR_POLICY_ID);
console.log(env.REACT_APP_MANCHESTER_HOSPITAL_ADMIN_POLICY_ID);

console.log(env.REACT_APP_LONDON_HOSPITAL_DOCTOR_POLICY_ID);
console.log(env.REACT_APP_LONDON_HOSPITAL_ADMIN_POLICY_ID);

console.log(env.REACT_APP_BOLTON_RESEARCH_INSTITUTE_ENTITY_POLICY_ID);

console.log(env.REACT_APP_MANCHESTER_HOSPITAL_DOCTOR_SCHEMA_ID);
console.log(env.REACT_APP_MANCHESTER_HOSPITAL_ADMIN_SCHEMA_ID);

console.log(env.REACT_APP_LONDON_HOSPITAL_DOCTOR_SCHEMA_ID);
console.log(env.REACT_APP_LONDON_HOSPITAL_ADMIN_SCHEMA_ID);

console.log(env.REACT_APP_BOLTON_RESEARCH_INSTITUTE_ENTITY_SCHEMA_ID);
