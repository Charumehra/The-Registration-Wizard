Create a Zod validation schema for two fields: 
1) A 'password' that requires a regex for 8+ characters, one uppercase, one number, and one special character. 
2) A 'dob' (date of birth) string that uses a refinement to ensure the user is at least 18 years old and prevents selecting a future date.