import * as z from "zod";

 const registrationSchema = z
  .object({
    firstName: z.string().min(1, "First name is too short"),
    lastName: z.string().min(1, "Last name is too short"),
    dob: z
      .string()
      .min(1, "Date of birth is required")
      .refine(
        (dateString) => {
          const birthDate = new Date(dateString);
          const today = new Date();
          let age = today.getFullYear() - birthDate.getFullYear();
          const monthDiff = today.getMonth() - birthDate.getMonth();
          if (
            monthDiff < 0 ||
            (monthDiff === 0 && today.getDate() < birthDate.getDate())
          ) {
            age--;
          }
          return age >= 18;
        },
        {
          message: "You must be at least 18 years old",
        },
      ),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

  export default registrationSchema;