export default {
  title: "Login",
  description:
    "Login to your TriWikiTech account to access your personalized learning experience.",
  email: {
    label: "Email",
    errorMessage: "Please enter a valid email address.",
  },
  password: {
    label: "Password",
    errorMessage:
      "Password must contain at least 8 characters, including uppercase, lowercase, number, and special character.",
  },
  rememberMe: "Remember me",
  forgotPassword: "Forgot your password?",
  signIn: "Sign In",
  noAccount: "Don't have an account?",
  signUp: "Sign Up",
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
    invalidLoginMethod: "Invalid login method",
    loginFailed: "Login failed",
    emailPasswordRequired: "Email and password are required",
    invalidEmailFormat: "Invalid email format",
    passwordRequirements: "Password does not meet requirements",
    incorrectEmailPassword: "The following email or password is incorrect",
    externalLoginNotImplemented: "External login not implemented yet.",
  },
};
