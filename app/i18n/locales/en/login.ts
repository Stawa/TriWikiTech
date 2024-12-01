export default {
  title: "Login",
  description:
    "Login to your TriWikiTech account to access your personalized learning experience.",
  form: {
    title: "Login to Account",
    description:
      "Sign in to your TriWikiTech account to continue your learning journey and access personalized content.",
    submit: "Login",
  },
  email: {
    label: "Email Address",
  },
  password: {
    label: "Password",
    note: "Minimum 8 characters with uppercase, lowercase, numbers & symbols",
  },
  dontHaveAccount: "Don't have an account?",
  signUp: "Sign Up",
  socialLogin: {
    or: "or continue with",
    google: {
      label: "Google",
    },
    github: {
      label: "GitHub",
    },
  },
  errors: {
    invalidAuthProvider: "Invalid login method",
    authFailed: "Login failed",
    emailPasswordRequired: "Email and password are required",
    invalidEmailFormat: "Invalid email format",
    passwordRequirements:
      "Password must contain at least 8 characters with uppercase, lowercase, numbers & symbols",
    incorrectEmailPassword: "Incorrect email or password",
    externalLoginNotImplemented: "External login not implemented yet",
  },
};
