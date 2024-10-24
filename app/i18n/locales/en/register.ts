export default {
  title: "Register",
  description:
    "Create an account to access your personalized learning experience.",
  email: {
    label: "Email",
    errorMessage: "Please enter a valid email address.",
  },
  displayName: {
    label: "Display Name",
  },
  password: {
    label: "Password",
    errorMessage:
      "Password must contain at least 8 characters, including uppercase, lowercase, number, and special character.",
  },
  confirmPassword: {
    label: "Confirm Password",
  },
  acceptTerms: {
    label: "I accept the Terms of Service and Privacy Policy",
  },
  createAccount: "Create Account",
  alreadyHaveAccount: "Already have an account?",
  signIn: "Sign In",
  socialLogin: {
    or: "or",
    github: {
      label: "GitHub",
    },
    google: {
      label: "Google",
    },
  },
  errors: {
    allFieldsRequired: "All fields are required",
    invalidEmailFormat: "Invalid email format",
    passwordRequirements: "Password does not meet requirements",
    passwordsDoNotMatch: "Passwords do not match",
    registrationFailed: "Registration failed",
    emailAlreadyExists: "The following email already exists",
    defaultError: "An error occurred during registration",
    externalLoginNotImplemented: "External login not implemented yet.",
  },
};
